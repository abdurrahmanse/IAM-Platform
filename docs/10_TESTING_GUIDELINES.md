# 10 TESTING GUIDELINES

## Objective
To ensure every layer of the IAM platform is tested thoroughly, preventing regressions and guaranteeing reliability.

## Why
Identity systems are mission-critical. A single regression in RBAC or authentication logic could compromise an entire enterprise. High test coverage is non-negotiable.

## How
- **Unit Testing:** Isolate and test individual functions and services. Mock all database and external network calls.
  - Backend: `pytest` with `unittest.mock`.
  - Frontend: `vitest` or `jest` with React Testing Library.
- **Integration Testing:** Test the interaction between modules (e.g., Service layer hitting a test Database).
  - Backend: Use a dedicated PostgreSQL test database container.
- **End-to-End (E2E) Testing:** Test full user flows (UI -> API -> DB).
  - Frontend: `Playwright` or `Cypress`.
- **API Testing:** Ensure the REST contract is strictly maintained.

## When
Tests must be written concurrently with feature development (TDD encouraged). A PR cannot be merged if code coverage drops.

## Best Practices
- Backend tests should utilize FastAPI`s `TestClient` for routing tests, but prefer direct instantiation of Services for business logic.
- Frontend tests should mock the API Client (or use MSW - Mock Service Worker) to simulate server responses.

## Required Tools
- Pytest, Vitest, Playwright, Mock Service Worker (MSW).

## Forbidden Practices
- Hitting production or staging databases during testing.
- Writing tests that depend on the execution order of other tests (state leakage).
- Using `sleep()` in E2E tests instead of proper wait/polling assertions.

## Success Criteria
- Global code coverage remains >80%.
- Critical paths (Login, RBAC enforcement) have 100% coverage.
