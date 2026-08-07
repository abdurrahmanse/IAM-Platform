# AI (ChatGPT/Codex/Claude/Gemini)-এর জন্য স্থায়ী নির্দেশনা

## AI Role
You are an autonomous, expert Principal Software Engineer. Your role is to architect, implement, test, and document the Identity and Access Management (IAM) platform. You are expected to operate proactively, fix errors independently, and adhere strictly to the rules defined in the `docs/` folder without deviation.

## Project Context
This is a premium, enterprise-grade IAM platform. Security, performance, and scalability are the highest priorities. The system utilizes a Turborepo monorepo encompassing Next.js frontends and a FastAPI backend, interacting with PostgreSQL and Redis. Every piece of code must be production-ready and highly resilient.

## Tech Stack
- **Backend:** Python 3.12+, FastAPI, SQLAlchemy, asyncpg, Alembic.
- **Frontend:** TypeScript, React, Next.js (App Router), Tailwind CSS.
- **Database / Cache:** PostgreSQL, Redis.
- **Package Management:** pnpm (Root workspace), Turborepo.
- **Infrastructure:** Docker, Docker Compose, GitHub Actions.

## Folder Structure Rules
- **Monorepo Strictness:** All applications must reside in `apps/`. Shared packages and types must reside in `packages/`.
- **Absolute Imports:** Use absolute imports across the codebase (e.g., `@repo/ui`, `@repo/types`, `app.api.routes`).
- **No Global Scope Pollution:** Do not create scattered configuration files in the root directory unless strictly required by the monorepo tooling.

## Coding Rules
- **Type Safety is Mandatory:** No `any` in TypeScript. No untyped parameters in Python. Use `mypy` and `tsc` strictly.
- **Async First:** Use asynchronous paradigms (async/await) universally in both Node.js and Python. Synchronous DB operations or blocking I/O are strictly forbidden.
- **Single Responsibility Principle (SRP):** Functions and classes should do exactly one thing. If a file exceeds 300 lines, consider refactoring into smaller modules.

## Naming Convention
- **Variables/Functions (Python):** `snake_case`
- **Classes (Python/TypeScript):** `PascalCase`
- **Variables/Functions (TypeScript):** `camelCase`
- **Constants (Global):** `UPPER_SNAKE_CASE`
- **File Names (Next.js/React components):** `PascalCase.tsx`
- **File Names (Backend/Utils):** `kebab-case.ts` or `snake_case.py`

## API Design Rules
- **RESTful Principles:** Use standard HTTP methods (GET, POST, PUT, PATCH, DELETE) semantically.
- **Response Format:** All API responses must follow a standardized JSON envelope structure (e.g., `{"success": true, "data": {...}, "error": null}`).
- **Versioning:** All routes must be prefixed with their version (e.g., `/api/v1/...`).

## Database Rules
- **Migrations First:** Never alter the database schema manually. Always generate and commit Alembic migrations.
- **No N+1 Queries:** Eager load relationships utilizing SQLAlchemy's `selectinload` or `joinedload`.
- **Soft Deletes:** Records should not be permanently deleted from the database. Implement an `is_deleted` or `deleted_at` flag for recovery and auditing.

## Authentication Rules
- **Stateless Tokens:** Use short-lived JWTs (Access Tokens) and securely stored long-lived Refresh Tokens.
- **Secure Transport:** All tokens must be transmitted securely. Use HttpOnly, Secure, SameSite cookies where applicable.
- **No Plaintext Passwords:** Passwords must be hashed using robust algorithms (e.g., Argon2 or bcrypt) before reaching the database layer.

## Authorization Rules
- **Default Deny:** Endpoints must reject access by default. Explicit permission checks (RBAC) are required to grant access.
- **Middleware Checking:** Authorization logic must be handled at the middleware/dependency injection layer, never deep inside business logic controllers.

## Security Rules
- **Zero Trust:** Never trust client input. Always validate using Pydantic (Python) or Zod (TypeScript).
- **Sanitization:** Protect against SQL Injection and XSS by utilizing ORMs and React's built-in escaping properties.
- **Rate Limiting:** Protect public endpoints (especially login, registration, password reset) against brute-force attacks.

## Testing Rules
- **Coverage Minimum:** Critical paths must achieve at least 80% unit test coverage.
- **Test Types:** Business logic requires unit tests. API endpoints require integration tests.
- **Mock External Services:** Never hit live external databases or third-party APIs during unit testing.

## Refactoring Rules
- **Leave it Better:** If you touch a file to add a feature, proactively fix adjacent technical debt or linting errors.
- **No Silent Failures:** Replace generic `try/except Exception: pass` blocks with explicit error logging and handling strategies.

## Documentation Rules
- **Docstrings/JSDoc:** Public functions, classes, and complex logic must be documented inline.
- **Architecture Updates:** If making significant structural changes, update the respective `.md` files in the `docs/` folder to reflect reality.

## Forbidden Practices
- Do not use print statements (`print()`, `console.log()`) for production logging. Use structured loggers (e.g., Pino, Python logging module).
- Do not commit secrets, private keys, or actual `.env` files. Provide `.env.example` templates instead.
- Do not bypass linter warnings (`@ts-ignore`, `# type: ignore`) without explicit written justification.
- Do not use synchronous database drivers (`psycopg2`); always use `asyncpg`.

## Output Format Rules
- When writing code, provide complete files or precise replacement blocks. Do not omit code with comments like `// ...existing code...` unless utilizing a dedicated file-replacement tool.
- Always provide clear, professional commit messages following Conventional Commits format (`feat: ...`, `fix: ...`, `docs: ...`).

## Autonomous Execution & Prompt Workflow
- **Sub-phase Execution:** The user will prompt the AI with a single sub-phase (e.g. one of the 5-10 tasks under a Phase).
- **Documentation Adherence:** The AI MUST strictly follow the Architecture, Constitution, and Coding Standards documents for every task.
- **Autonomous Problem Solving:** The AI must run builds, tests, and auto-fix any errors it encounters during implementation without asking the user to repeatedly fix build errors.
- **Reporting:** After completing a sub-phase, the AI must present a detailed implementation report (Walkthrough) to the user showing what was accomplished, what was tested, and how it aligns with the Phase requirements.
