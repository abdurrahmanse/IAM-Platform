# 03 ARCHITECTURE

## Objective
To define the macro-level system architecture of the IAM platform.

## Why
A clear architectural boundary prevents spaghetti code, ensures scalability, and allows independent scaling of frontend and backend services.

## How
The platform utilizes a **Turborepo** monorepo structure.
- **Frontend Layer:** Next.js applications (`apps/admin`, `apps/portal`, `apps/website`).
- **Backend Layer:** FastAPI application (`apps/api`).
- **Shared Layer:** `packages/ui`, `packages/types`, `packages/config`, `packages/api-client`.

## When
This architecture dictates the placement of all files and modules immediately upon repository creation.

## Best Practices
- **Strict Boundaries:** A Next.js app cannot directly query the PostgreSQL database. It must communicate over HTTP to the FastAPI backend.
- **Proxy Pattern:** Use Next.js API routes as a reverse proxy to handle CORS and abstract the backend port (e.g., mapping `/api/v1/*` to `localhost:8000`).

## Required Tools
- Turborepo
- pnpm (workspaces)
- Docker (for containerized deployment of individual apps)

## Forbidden Practices
- Circular dependencies between workspace packages.
- Bypassing the API gateway/proxy layer.

## Success Criteria
- `pnpm build` successfully builds all applications in the correct dependency order.
- Applications can be deployed independently as separate Docker containers.
