# সিস্টেম আর্কিটেকচার

## High-Level Architecture
The Identity and Access Management (IAM) platform is a premium, enterprise-grade distributed system designed for high availability, security, and low latency. It bridges highly scalable frontends with a robust backend service using a Turborepo monorepo approach.
- **Client Layer:** Next.js (App Router) applications acting as Admin Consoles, User Portals, and Public Websites.
- **API Gateway / Proxy:** Next.js reverse proxies requests to the backend to resolve CORS and port mappings seamlessly on a single domain.
- **Compute Layer:** FastAPI (Python) serving as the core engine for identity, RBAC, and business logic.
- **Data Layer:** PostgreSQL (relational persistent storage) and Redis (in-memory caching and session state).

## Monorepo Structure
The project utilizes **Turborepo** with **pnpm** to manage dependencies and build pipelines across multiple apps and packages.
- `apps/api`: FastAPI Python backend.
- `apps/website`: Next.js public-facing landing page.
- `apps/admin`: Next.js internal administration console.
- `apps/portal`: Next.js self-service user portal.
- `packages/ui`: Shared React component library (Tailwind, Radix/Shadcn UI).
- `packages/config`: Shared configuration (ESLint, Prettier, TypeScript).
- `packages/types`: Shared TypeScript interfaces and types, auto-generated or synchronized with Python schemas.

## Backend Architecture
The backend is built with **FastAPI** utilizing an asynchronous paradigm.
- **Framework:** FastAPI (Python 3.12+).
- **Concurrency:** `async/await` driven by `uvicorn` and `asyncpg`.
- **Dependency Injection:** Heavily utilizes FastAPI's `Depends` for database sessions, current user extraction, and permission checking.
- **Validation:** Pydantic models (v2) handle all input validation and serialization.

## Frontend Architecture
The frontend is built with **Next.js** (App Router paradigm).
- **Framework:** React 18+ and Next.js 14+.
- **Styling:** Tailwind CSS with a custom design system based on `packages/ui`.
- **State Management:** React Context for global state (e.g., User Auth State), and TanStack Query (React Query) for server-state synchronization and caching.
- **Rendering:** Server Components (RSC) where possible for performance, Client Components only when interactivity requires it.

## Shared Packages
Code reuse is strictly enforced via `packages/`.
- **`@repo/ui`:** Contains purely presentational, stateless UI components.
- **`@repo/utils`:** Shared utility functions (date formatting, string manipulation).
- **`@repo/api-client`:** An auto-generated or strongly typed API client to consume the FastAPI backend with full type safety.

## Module Structure
The backend follows a domain-driven module structure inside `apps/api/app/`:
- `api/v1/`: Versioned route definitions.
- `core/`: Global configurations, security utilities, and exception handlers.
- `crud/`: Reusable database query functions.
- `models/`: SQLAlchemy ORM definitions.
- `schemas/`: Pydantic models (DTOs).
- `services/`: Business logic that orchestrates CRUD operations and external integrations.

## Request Flow
1. **Client Request:** User performs an action on the Next.js UI (e.g., login).
2. **Proxy:** The request hits the Next.js API route (e.g., `/api/v1/auth/login`), which rewrites/proxies the request to the FastAPI backend running on port 8000.
3. **Backend Middleware:** FastAPI intercepts the request, handles CORS, and extracts tracing IDs.
4. **Dependency Injection:** The JWT is extracted from HttpOnly cookies or the `Authorization` header and validated. The `current_user` is injected.
5. **Business Logic:** The specific route handler delegates complex logic to a `service`.
6. **Data Access:** The `service` uses a `crud` function to interact with PostgreSQL via SQLAlchemy.
7. **Response:** A Pydantic model serializes the output back to the client.

## Authentication Flow
- **Login:** User submits credentials -> Backend verifies Argon2 hash -> Generates a short-lived Access Token (JWT) and a long-lived Refresh Token (opaque string stored in Redis/DB) -> Tokens are set in HttpOnly cookies.
- **Refresh:** Before the Access Token expires, the client calls `/refresh`. The backend validates the Refresh Token against Redis (checking if it was revoked) and issues a new Access Token.
- **Logout:** The Refresh Token is immediately blacklisted in Redis.

## Authorization Flow
- Authorization is executed sequentially after authentication.
- A `RequiresRole` or `RequiresPermission` dependency is injected into FastAPI routes.
- The system evaluates the `current_user`'s assigned roles and computes the effective permissions.
- If the user lacks the required permission, a `403 Forbidden` is thrown instantly before any business logic executes.

## RBAC Model
Role-Based Access Control (RBAC) is implemented via a hierarchical structure:
- **Permissions:** Granular actions (e.g., `users:read`, `users:write`, `reports:delete`).
- **Roles:** A collection of permissions (e.g., `Admin`, `Manager`, `Viewer`).
- **User Roles (Many-to-Many):** Users are assigned one or more roles.
- **Effective Permissions:** A user's total permissions are the union of all permissions granted by their active roles.

## Database Design
- **Engine:** PostgreSQL 16+.
- **ORM:** SQLAlchemy 2.0 (Async mode).
- **Migrations:** Alembic.
- **Schema:**
  - `users`: Core identity table (id, email, password_hash, is_active).
  - `roles`: Role definitions.
  - `permissions`: Permission registry.
  - `role_permissions`: Mapping of roles to permissions.
  - `user_roles`: Mapping of users to roles.
  - `sessions`: Tracking active user sessions for security auditing.
  - `audit_logs`: Immutable ledger of critical actions.

## Event Flow
- Standard operations are synchronous.
- High-latency or non-critical tasks (e.g., sending welcome emails, webhook processing) are handled asynchronously.
- Events are pushed to a message broker (Redis Pub/Sub or Celery) and processed by background worker nodes to ensure the main API remains non-blocking.

## Caching Strategy
- **Redis** is used as the primary caching layer.
- **Session State:** Refresh token whitelisting and blacklisting.
- **RBAC Caching:** A user's effective permissions are cached in Redis upon login and invalidated when an admin updates their roles, preventing a complex DB join on every authenticated request.
- **Rate Limiting:** IP and User-based request counting is tracked in Redis.

## Background Jobs
- Background task processing is essential for the IAM platform to handle bulk operations (e.g., CSV user imports) and notifications.
- FastAPI's built-in `BackgroundTasks` is used for lightweight, immediate post-request operations.
- Celery + Redis is implemented for scheduled (cron) tasks and heavy asynchronous processing (e.g., nightly database backups or stale session cleanup).

## Deployment Architecture
- **Containerization:** All applications and services are bundled in highly optimized, multi-stage Docker images.
- **Orchestration:** Managed via Docker Compose for local environments, and Kubernetes (or AWS ECS/GCP Cloud Run) for production.
- **Proxy/Ingress:** NGINX or Traefik acts as the Edge Router, terminating SSL/TLS and routing traffic to the Next.js apps or directly to the API where appropriate.

## Scalability Plan
- **Stateless Services:** The FastAPI and Next.js layers are completely stateless, allowing horizontal scaling by spinning up additional replicas.
- **Database Scaling:** PostgreSQL read-replicas will be introduced for read-heavy operations (e.g., user search). Connection pooling via `PgBouncer` will manage connection limits.
- **Caching Scaling:** Redis will be deployed in cluster mode for high availability.
