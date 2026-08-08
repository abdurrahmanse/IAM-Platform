# Enterprise IAM Platform

A production-grade, enterprise Identity and Access Management (IAM) platform built with a modern, high-performance tech stack. This monorepo leverages **Turborepo** and **pnpm workspaces** to scale gracefully across multiple frontend applications, a modular backend, and shared packages.

---

## 🚀 What's Included

This monorepo is meticulously configured to include everything required for a production-ready enterprise application:

### 🏗️ Architecture & Workspaces
- **Turborepo**: High-performance build system for monorepos.
- **pnpm Workspace**: Fast, disk space efficient package management.
- **Root Configurations**: Centralized config files for the entire workspace.
- **Environment Management**: Robust handling of `.env` files across environments.
- **VS Code Configuration**: Pre-configured workspace settings, extensions, and snippets.

### 💻 Frontend (Next.js App Router)
Five distinct Next.js applications tailored for different user journeys:
- **Admin App** (`apps/admin`): Internal portal for platform administrators.
- **Portal App** (`apps/portal`): Dashboard for authenticated end-users.
- **Web App** (`apps/web`): Public-facing marketing website.
- **Docs App** (`apps/docs`): Public documentation and API references.
- **Setup App** (`apps/setup`): Initial onboarding and tenant provisioning flow.

### ⚙️ Backend (FastAPI)
- **FastAPI**: High-performance Python framework.
- **DDD + Modular Monolith**: Domain-Driven Design principles ensuring scalable and maintainable backend boundaries.

### 📦 Shared Packages
- **Shared Design System**: Reusable, consistent UI components across all apps.
- **Tailwind Shared Config**: Unified utility classes and styling tokens.
- **TypeScript Shared Config**: Strict, consistent type-checking rules.
- **API Client**: Strongly-typed frontend data fetching client.
- **Auth SDK**: Reusable authentication logic for all clients.

### 🛠️ Developer Experience & Tooling
- **ESLint & Prettier**: Automated linting and code formatting.
- **Husky & Commitlint**: Git hooks ensuring conventional commits.
- **Changesets**: Versioning and changelog management.

### 🧪 Testing
- **Vitest**: Blazing fast unit testing for the frontend.
- **Pytest**: Comprehensive testing for the Python backend.

### 🚀 DevOps & Infrastructure
- **Docker & Docker Compose**: Containerized environments for consistent local development and production deployments.
- **GitHub Actions**: Automated CI/CD Pipelines for testing, linting, and deployment.
- **Infrastructure**: Infrastructure-as-code definitions for cloud provisioning.

---

## 📁 Repository Structure

```text
.
├── apps/
│   ├── admin/       # Next.js admin dashboard
│   ├── api/         # FastAPI backend services
│   ├── docs/        # Next.js documentation site
│   ├── portal/      # Next.js user portal
│   ├── setup/       # Next.js onboarding app
│   └── web/         # Next.js public website
├── packages/
│   ├── api-client/  # Shared API client
│   ├── auth/        # Auth SDK
│   ├── config-eslint/
│   ├── config-tailwind/
│   ├── config-typescript/
│   └── ui/          # Shared Design System
├── infrastructure/  # IaC, Docker, and deployment manifests
├── docs/            # Architecture Documentation & Roadmaps
└── scripts/         # Workspace utility scripts
```

---

## 📚 Documentation

For an in-depth look at our engineering decisions and project planning, please consult the `docs/` directory:

- [Constitution & Rules](docs/01_CONSTITUTION.md)
- [Development Roadmap](docs/04_DEVELOPMENT_ROADMAP.md)
- [Architecture Decision Records (ADRs)](docs/13_ARCHITECTURE_DECISION_RECORDS.md)

---

## 🚦 Getting Started

### Prerequisites
- Node.js (v20+)
- pnpm (v9+)
- Python (3.11+)
- Docker & Docker Compose

### Setup

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Run Local Development Environment**
   ```bash
   pnpm dev
   ```

This will spin up all Next.js applications and the FastAPI backend concurrently using Turborepo.

---

*Built with ❤️ and structured for scale.*
