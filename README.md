# Enterprise IAM Monorepo

Welcome to the Enterprise Identity and Access Management (IAM) Monorepo.

This repository uses Turborepo, pnpm workspaces, Next.js for the frontend applications, and a FastAPI Domain-Driven Design (DDD) Modular Monolith for the backend API.

## Structure

### Applications (`apps/`)
- **`admin`**: Next.js App Router internal admin dashboard.
- **`portal`**: Next.js App Router customer-facing portal.
- **`website`**: Next.js App Router public website.
- **`docs`**: Next.js App Router documentation site.
- **`setup`**: Next.js App Router initial setup wizard.
- **`api`**: Python FastAPI DDD Modular Monolith.

### Packages (`packages/`)
- **`ui`**: Shared React components using Tailwind CSS.
- **`config`**: Shared configurations for ESLint, Prettier, TypeScript, and Tailwind.
- **`utils`**: Shared helper functions.
- **`types`**: Shared TypeScript types and interfaces.
- **`validation`**: Shared validation schemas.
- **`api-client`**: Auto-generated or shared SDK for interacting with the backend API.
- **`auth-sdk`**: Authentication utilities.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v20+)
- [pnpm](https://pnpm.io/) (v9+)
- [Python](https://www.python.org/) (v3.13+)
- [Docker](https://www.docker.com/)

## Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   ```
   *(This will also create a virtual environment in `apps/api/.venv` and install Python requirements).*

2. **Environment Variables:**
   Create a `.env` file in the root based on `.env.example` (or configure via your CI/CD).

3. **Development:**
   Start all applications concurrently:
   ```bash
   pnpm run dev
   ```

4. **Testing:**
   Run Vitest for frontend packages and Pytest for the API:
   ```bash
   pnpm run test
   ```

## Docker Compose

To spin up the entire ecosystem (Postgres, Redis, FastAPI, Next.js apps) in containers:

```bash
docker compose up --build
```
