# 07 BACKEND ARCHITECTURE

## Objective
To establish a robust, high-performance, and secure backend using FastAPI.

## Why
The IAM backend is the central source of truth for security and authorization. It must be perfectly structured using Domain Driven Design (DDD) to allow future extensions like SAML, LDAP, and WebAuthn without major refactoring.

## How
- **Framework:** FastAPI (Python 3.12+).
- **Architecture:** 
  - **Feature Modules:** Organize by domain (`app/domain/auth`, `app/domain/users`).
  - **Repository Pattern:** Abstract database access into Repository classes to decouple business logic from SQLAlchemy.
  - **Service Layer:** All business logic resides in Services. Services inject Repositories.
  - **Dependency Injection:** FastAPI `Depends` is used to inject Services into route handlers (Controllers).
- **Data Layer:** PostgreSQL accessed asynchronously via `asyncpg` and SQLAlchemy 2.0. Migrations managed by Alembic.

## When
Applied to all backend module development.

## Best Practices
- Pydantic v2 schemas must be used for all request/response validation.
- Background tasks (emails, webhooks) must not block the main thread; use Celery or FastAPI BackgroundTasks.
- Structured Logging in JSON format for observability.

## Required Tools
- FastAPI
- SQLAlchemy 2.0 (Async)
- Alembic
- Pydantic
- Uvicorn/Gunicorn

## Forbidden Practices
- Writing database queries (`session.execute`) directly inside API route handlers.
- Using synchronous database drivers (`psycopg2`).
- Hardcoding secrets or configurations (must use `pydantic-settings`).

## Success Criteria
- The backend can handle high concurrency due to full async implementation.
- Business logic is fully decoupled from the HTTP transport layer, allowing easy unit testing.
