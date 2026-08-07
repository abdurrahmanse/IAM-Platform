# 11 DEPLOYMENT GUIDE

## Objective
To define a scalable, secure, and automated deployment pipeline for the entire monorepo.

## Why
Manual deployments are error-prone and slow. A formalized DevOps strategy ensures the IAM platform can be deployed consistently across dev, staging, and production environments.

## How
- **Containerization:** Every application (`apps/api`, `apps/admin`, `apps/portal`) must have its own optimized, multi-stage `Dockerfile`.
- **Orchestration:** Use `docker-compose` for local development and Kubernetes (or AWS ECS/GCP Cloud Run) for production.
- **CI/CD:** GitHub Actions executes Linting -> Testing -> Building -> Pushing to Container Registry on every push to `main`.
- **Database Migrations:** Alembic migrations run automatically as a pre-deploy hook during the CI/CD pipeline.

## When
Deployment pipelines should be configured immediately in Phase 00/01.

## Best Practices
- Build artifacts once, deploy them across multiple environments by injecting environment variables at runtime, not build time (where possible).
- Use Next.js standalone output mode to drastically reduce Docker image sizes.

## Required Tools
- Docker & Docker Compose
- GitHub Actions
- Turborepo remote caching (optional but recommended for speed)

## Forbidden Practices
- Committing `.env.production` files to the repository.
- Running Next.js or FastAPI in development mode (`npm run dev`, `uvicorn --reload`) in production environments.
- Deploying database migrations manually from a developer machine.

## Success Criteria
- Pushing to the `main` branch automatically results in a zero-downtime deployment to the staging environment in under 10 minutes.
