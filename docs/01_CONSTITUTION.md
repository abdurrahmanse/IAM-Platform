# প্রজেক্টের সংবিধান (সবচেয়ে গুরুত্বপূর্ণ)

## Vision
To build a world-class, premium enterprise Identity and Access Management (IAM) platform that provides secure, scalable, and frictionless authentication and authorization solutions for modern distributed systems.

## Mission
To deliver a robust Monorepo-based architecture combining the high-performance capabilities of FastAPI (Python) and Next.js (React), ensuring developers and organizations have a reliable, type-safe, and highly secure infrastructure for managing users, roles, and permissions out-of-the-box.

## Project Goals
- **Security First:** Zero-trust architecture with end-to-end encryption, strict RBAC, and secure session management.
- **Scalability:** Capable of handling millions of concurrent authentication requests utilizing asynchronous Python (FastAPI/asyncpg) and Redis caching.
- **Developer Experience (DX):** A clean, highly modular Turborepo monorepo that makes contributing, testing, and deploying a seamless experience.
- **Extensibility:** A plug-and-play architecture where new authentication strategies (OAuth, MFA, Biometrics) can be added effortlessly.

## Non-Goals
- We are not building a generic CMS (Content Management System) or ERP.
- We are not building an active directory replacement for on-premise legacy systems; this is a modern cloud-native IAM.
- UI components should not dictate backend logic. The API must remain client-agnostic.

## Core Principles
1. **Single Source of Truth:** Data models and configurations must be defined once.
2. **Fail Securely:** Any system failure must default to denying access, never granting it.
3. **Automate Everything:** From testing to deployments and formatting, manual chores must be automated.
4. **Performance is a Feature:** API responses should consistently remain under 100ms.

## Architecture Principles
- **Microservice-ready Monorepo:** Apps and packages are strictly isolated within the monorepo workspace.
- **API-First Design:** The frontend applications strictly consume the FastAPI backend. No direct database access from the frontend.
- **Stateless Authentication:** JWT-based stateless sessions supported by Redis for token revocation and rate-limiting.
- **Database Normalization:** PostgreSQL schemas must follow strict normalization rules unless explicitly denormalized for calculated read-heavy performance.

## Security Principles
- **Least Privilege:** Services, database roles, and users operate with the minimum permissions required.
- **Defense in Depth:** Multiple layers of security (CORS, CSRF, Rate Limiting, Input Validation).
- **Secrets Management:** No hardcoded secrets. All sensitive configurations must use environment variables injected at runtime.
- **Auditability:** Every state-changing action must be logged and traceable.

## Development Principles
- **Strict Typing:** TypeScript (strict mode) for frontend and Python Type Hints for backend are mandatory.
- **Linting & Formatting:** Pre-commit hooks (`husky`, `commitlint`) enforce code style before any code reaches the repository.
- **Test-Driven Mentality:** Critical authentication paths must have comprehensive unit and E2E tests before merging.

## Code Ownership
- **Frontend Code (`apps/website`, `apps/admin`, `apps/portal`):** Owned by Frontend/Full-stack engineers.
- **Backend Code (`apps/api`):** Owned by Backend/Security engineers.
- **Infrastructure (`docker`, `turborepo` config):** Owned by DevOps engineers.
- *All pull requests modifying authentication flows require at least two approvals, including one from a security domain expert.*

## Definition of Done
A task is considered "Done" only when:
1. The code is written and adheres to coding standards.
2. Unit tests and integration tests are written and passing.
3. Code is peer-reviewed and approved.
4. Documentation (API Swagger, READMEs) is updated.
5. The feature is successfully deployed and verified in a staging environment.

## Release Strategy
- **Continuous Integration (CI):** Every commit to `main` triggers automated builds and tests.
- **Semantic Versioning:** Releases follow the `MAJOR.MINOR.PATCH` format.
- **Environment Progression:** Local -> Staging -> Production.

## Versioning Strategy
- **API Versioning:** All API endpoints must be versioned in the URL route (e.g., `/api/v1/auth/login`).
- **Package Versioning:** Shared packages in the monorepo use synchronized versioning managed by tools like Changesets or Lerna/Turborepo.

## Branch Strategy
- **`main`:** The stable, production-ready branch.
- **`develop` / `staging`:** The active integration branch.
- **Feature Branches:** `feature/task-name` (e.g., `feature/SP-05.01-registration`).
- **Bugfix Branches:** `fix/bug-name` (e.g., `fix/jwt-refresh-timeout`).

## Documentation Rules
- Documentation must live alongside the code in the `docs/` directory.
- Code must be self-documenting (descriptive variable names and function signatures).
- Complex business logic must be accompanied by inline comments.
- Architecture Decisions must be logged in Architecture Decision Records (ADRs) if significant changes occur.

## Breaking Change Policy
- Breaking changes require a minimum of a 30-day deprecation notice.
- A new API version (e.g., `v2`) must be introduced alongside the old version.
- The old version is only removed after the deprecation window expires and client migration is complete.
