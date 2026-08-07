# কোডিং স্ট্যান্ডার্ড

## Project Structure
The repository strictly follows a Turborepo-managed Monorepo structure:
- **`apps/`**: Contains deployable applications (Next.js, FastAPI).
- **`packages/`**: Contains shared logic (UI components, configurations, types).
- All shared modules must define an explicit `exports` map in their `package.json`.

## Folder Naming
- **Kebab-case:** All folders must be named using `kebab-case` (e.g., `user-management`, `api-client`).
- **Singular/Plural:** Use plural for collections of things (`components`, `utils`, `services`) and singular for domain modules (`auth`, `user`).

## File Naming
- **React Components / Next.js Pages:** `PascalCase.tsx` (e.g., `UserProfile.tsx`).
- **TypeScript Utilities / Types:** `kebab-case.ts` (e.g., `date-formatter.ts`).
- **Python Modules:** `snake_case.py` (e.g., `auth_service.py`).
- **Configuration Files:** Usually dictated by the tool (e.g., `.eslintrc.js`, `next.config.ts`), otherwise `kebab-case`.

## Class Naming
- **TypeScript & Python:** Use `PascalCase` for all classes, models, and schemas (e.g., `UserCreateDTO`, `RoleManager`).
- Append clear suffixes to distinguish layers (e.g., `User` for DB Model, `UserSchema` for Pydantic, `UserService` for logic).

## Function Naming
- **TypeScript:** Use `camelCase` for functions (e.g., `fetchUserData`).
- **React Hooks:** Must start with `use` and use `camelCase` (e.g., `useAuth`).
- **Python:** Use `snake_case` for all functions and methods (e.g., `get_user_by_id`).
- Function names should be actionable verbs (e.g., `get`, `create`, `update`, `delete`, `calculate`).

## Variable Naming
- **TypeScript:** Use `camelCase` (e.g., `accessToken`).
- **Python:** Use `snake_case` (e.g., `access_token`).
- **Constants (both):** Use `UPPER_SNAKE_CASE` (e.g., `MAX_LOGIN_ATTEMPTS`).
- Boolean variables should be prefixed with `is`, `has`, or `should` (e.g., `is_active`, `hasPermission`).

## TypeScript Rules
- **Strict Mode:** `strict: true` must be enabled in all `tsconfig.json` files.
- **No Any:** The `any` type is strictly forbidden. Use `unknown` if the type is truly dynamic, followed by type narrowing.
- **Interfaces over Types:** Prefer `interface` for object shapes, use `type` aliases for unions, intersections, or primitives.
- **Exporting:** Favor named exports over default exports (except for Next.js pages where required).

## Python Rules
- **Type Hints:** Every function signature (parameters and return types) MUST include PEP 484 type hints.
- **Mypy Strict:** Code must pass `mypy --strict`.
- **Formatting:** Use `black` (line length 88) and `isort` (profile black) for all formatting.
- **Linting:** `ruff` or `flake8` must pass without warnings.

## FastAPI Rules
- **Dependency Injection:** Use FastAPI's `Depends` for reusable logic (DB sessions, current user parsing).
- **Routers:** Group endpoints logically using `APIRouter` and register them centrally in `main.py` with version prefixes.
- **Path Operations:** Explicitly define `response_model` and HTTP `status_code` for all endpoints.

## Next.js Rules
- **App Router:** Use the Next.js 14+ App Router (`app/` directory).
- **Server Components (RSC):** Default to Server Components. Use `'use client'` only at the leaf nodes of the component tree when state (`useState`), effects (`useEffect`), or browser APIs are required.
- **Data Fetching:** Fetch data on the server when possible. Avoid `useEffect` for data fetching; use Server Components or React Query.

## React Rules
- **Functional Components:** Only use functional components. Class components are forbidden.
- **Custom Hooks:** Extract complex component logic into custom hooks to keep components purely presentational.
- **Props:** Always define an Interface for props. Destructure props in the function signature.

## SQLAlchemy Rules
- **Async Engine:** Use `async_engine` and `AsyncSession`. Do not use synchronous database calls.
- **Queries:** Use the modern SQLAlchemy 2.0 API (`select()`, `session.execute()`) rather than the legacy `query()` API.
- **Transactions:** Services should not commit transactions directly in loops. Group logical operations and commit once, utilizing database transactions to ensure atomicity.

## API Response Format
All JSON responses must adhere to the following envelope structure:
```json
{
  "success": true, // or false
  "data": { ... }, // Present if success: true
  "error": null, // or { "code": "ERR_NOT_FOUND", "message": "User not found" }
  "meta": { "page": 1, "total": 50 } // Optional pagination/metadata
}
```

## Error Handling
- **Backend:** Raise specific custom exceptions (e.g., `UserNotFoundException`) in the service layer. A global Exception Handler in FastAPI will catch these and format them into the standard JSON error envelope with appropriate HTTP status codes.
- **Frontend:** Use React Error Boundaries for unexpected UI crashes. Handle expected API errors gracefully by showing toast notifications or inline error messages.

## Logging
- **No Console Logs:** Do not use `console.log()` or `print()` in production.
- **Structured Logging:** Use structured JSON logging (e.g., `logger.info("User created", extra={"user_id": 123})`).
- **Levels:** Use `DEBUG` for development, `INFO` for standard events, `WARNING` for recoverable issues, and `ERROR` for critical failures.

## Validation
- **Backend:** Pydantic `v2` models must be used for parsing and validating all incoming request bodies and query parameters.
- **Frontend:** `zod` must be used for all form validation (integrated with `react-hook-form`).

## Testing
- **Unit Tests:** `pytest` (backend) and `vitest`/`jest` (frontend). Must test isolated logic.
- **Integration Tests:** Must use a separate, temporary test database to verify API endpoints end-to-end.
- **Naming:** Test files must match the file being tested (e.g., `auth_service.py` -> `test_auth_service.py`).

## Git Commit Convention
Commits must follow the **Conventional Commits** format. Commits that fail the `commitlint` pre-commit hook will be rejected.
- `feat:` A new feature.
- `fix:` A bug fix.
- `docs:` Documentation only changes.
- `style:` Changes that do not affect the meaning of the code (white-space, formatting).
- `refactor:` A code change that neither fixes a bug nor adds a feature.
- `test:` Adding missing tests or correcting existing tests.
- `chore:` Changes to the build process or auxiliary tools and libraries.

## Pull Request Rules
- PR titles must follow the Conventional Commits format.
- A PR should relate directly to a single Phase/Sub-phase task ID (e.g., `feat(auth): [SP-05.01] implement user registration`).
- Keep PRs small and focused.
- All CI checks (lint, test, build) must pass before a review is requested.

## Documentation Rules
- Every module must have a clear `README.md` if its purpose is not immediately obvious.
- Complex algorithms must have inline comments explaining *why* it was done a certain way, not *what* it is doing (the code should explain what).
- OpenAPI/Swagger docs must be populated with clear descriptions and examples for all FastAPI routes.

## Code Review Checklist
- [ ] Does the code adhere to the single responsibility principle?
- [ ] Are there any hardcoded values that should be environment variables or constants?
- [ ] Are all new variables/functions fully type-hinted and strict?
- [ ] Is error handling robust? Are exceptions logged?
- [ ] Have unit/integration tests been added for this specific path?
- [ ] Is the database transaction scoped correctly?
- [ ] Does this introduce any N+1 query problems?
