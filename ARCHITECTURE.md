# Architecture: Production-Grade Enterprise IAM Platform

This document outlines the architectural decisions and system design for the Enterprise Identity and Access Management (IAM) Platform. The platform is designed for high availability, security, scalability, and maintainability.

## 1. High-Level Architecture Overview

The system is organized as a polyglot monorepo orchestrated by **Turborepo** and **pnpm workspaces**. It consists of a unified Python FastAPI backend and multiple specialized Next.js frontend applications.

### 1.1 Components

- **Frontend Applications (Next.js 14+ App Router):**
  - `apps/website`: Public marketing and documentation site.
  - `apps/portal`: Customer-facing self-service identity portal (Profile, Security, 2FA management).
  - `apps/admin`: Internal dashboard for tenant, user, and role management.
  - `apps/setup`: Initial installation and configuration wizard.

- **Backend API (FastAPI):**
  - `apps/api`: A high-performance async API acting as the central nervous system. Built with Python 3.13, leveraging Pydantic V2 for validation and SQLAlchemy 2.0 for ORM.

- **Shared Packages (`packages/*`):**
  - Consumable shared libraries (`ui`, `config`, `utils`, `types`, `validation`, `api-client`) ensuring DRY principles and consistent behavior across the monorepo.

---

## 2. Backend Architecture: DDD Modular Monolith

To balance the speed of development with future scalability, the backend follows a **Modular Monolith** pattern governed by **Domain-Driven Design (DDD)**.

### 2.1 Why Modular Monolith?
Premature microservices introduce network latency, distributed transaction complexity, and deployment overhead. A modular monolith provides strict internal boundaries (modules) that can be extracted into separate microservices later if scaling bottlenecks occur, without the initial overhead.

### 2.2 Module Structure
Each business domain resides in its own isolated module under `apps/api/app/modules/`:

```text
apps/api/app/modules/[domain_name]/
├── api/             # FastAPI routers (Controllers)
├── models/          # SQLAlchemy ORM definitions (Entities)
├── schemas/         # Pydantic validation models (DTOs)
├── services/        # Business logic and use case orchestration
└── repositories/    # Database abstraction and query execution
```

### 2.3 Core Domains
- **`users`**: Identity lifecycle management.
- **`auth`**: Authentication flows, OAuth2 integrations, and session token generation.
- **`roles` & `permissions`**: Role-Based Access Control (RBAC) and policy enforcement.
- **`sessions`**: Active device and token management.
- **`audit`**: Immutable security event logging.
- **`analytics`**: Identity usage metrics and reporting.

---

## 3. Data Architecture & Persistence

### 3.1 Primary Database: PostgreSQL
- **Relational Integrity**: PostgreSQL is used as the primary source of truth for all transactional data (users, roles, audit logs).
- **ORM**: SQLAlchemy 2.0 provides type-safe, async database interactions.
- **Migrations**: Alembic manages schema evolution deterministically.
- **Connection Pooling**: AsyncPG combined with SQLAlchemy's connection pooling ensures robust handling of concurrent requests.

### 3.2 Caching & Ephemeral Data: Redis
- **Session Store**: Redis stores active refresh tokens and session metadata for rapid revocation.
- **Rate Limiting**: Distributed rate limiting relies on Redis to prevent brute-force attacks and abuse.
- **Caching Layer**: Frequently accessed but rarely changing data (e.g., active permission policies) are cached in Redis to reduce database load.

---

## 4. Security & Authentication

As an IAM platform, security is the foundational pillar.

- **Stateless + Stateful Auth**: 
  - Short-lived JWT Access Tokens (stateless, fast verification).
  - Long-lived Refresh Tokens stored securely as HttpOnly cookies and tracked in Redis (stateful, revocable).
- **Password Hashing**: Argon2id or bcrypt is used for secure credential storage.
- **Role-Based Access Control (RBAC)**: Fine-grained permissions are enforced at the API route level using FastAPI dependency injection.
- **Audit Logging**: Every sensitive action (login, permission change, password reset) generates an immutable audit event.
- **Data Protection**: PII (Personally Identifiable Information) is encrypted at rest, and all transit is secured via TLS 1.3.

---

## 5. Frontend Architecture

### 5.1 Next.js App Router
All frontends leverage Next.js App Router for server-side rendering (SSR), static site generation (SSG), and API route handling where necessary.

### 5.2 Design System
- Built with **React**, **Tailwind CSS**, and **Radix UI** primitives (via shadcn/ui patterns).
- Encapsulated in `packages/ui` to guarantee visual consistency across the Admin, Portal, and Website.

### 5.3 State & Data Fetching
- **TanStack Query (React Query)** handles server state, caching, and optimistic updates.
- **Zustand** manages complex local UI state when necessary.
- Form validation is unified across frontend and backend using **Zod** (frontend) and **Pydantic** (backend) mapped to shared types.

---

## 6. DevOps & Infrastructure

### 6.1 Containerization
- **Docker**: All services are containerized. Next.js applications compile to `standalone` output for minimized image sizes. The FastAPI backend runs on slim Python images.
- **Local Dev**: `docker-compose.yml` provides a one-click local replica of the production infrastructure.

### 6.2 CI/CD Pipeline
- **GitHub Actions**: 
  - **PR Checks**: Linting (ESLint, Ruff), Type Checking (tsc, mypy), and Unit Tests (Vitest, Pytest).
  - **Build Checks**: Validation that all Docker images build successfully.
  - **Release**: Semantic versioning and changelog generation via Changesets.

### 6.3 Deployment Topologies (Target)
The architecture supports flexible deployment models:
1. **Kubernetes (K8s)**: Ideal for high-availability enterprise deployments. API, Frontend apps, and Redis run in pods. Postgres is managed via an operator (e.g., CloudNativePG) or a managed cloud service (RDS/Cloud SQL).
2. **Serverless / PaaS**: Next.js apps deployed to Vercel/Cloudflare Pages; FastAPI deployed to Google Cloud Run or AWS App Runner; Managed Postgres and Redis.

---

## 7. Observability & Monitoring

To maintain enterprise SLA standards:
- **Centralized Logging**: Structured JSON logging across all services.
- **Metrics**: Prometheus endpoints expose application metrics (request rates, latency, error rates, DB connection pool health).
- **Tracing**: OpenTelemetry (OTel) traces requests as they traverse from the Next.js frontend through the FastAPI backend to the database.
- **Health Checks**: Dedicated `GET /health` endpoints verify database and Redis connectivity for orchestrator readiness/liveness probes.
