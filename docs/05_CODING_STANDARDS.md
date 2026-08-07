# 05 CODING STANDARDS

## Objective
To enforce a uniform, highly readable, and type-safe codebase across all languages (TypeScript and Python).

## Why
Consistency reduces cognitive load for developers and AI agents, resulting in faster code reviews, fewer bugs, and easier onboarding.

## How
- **TypeScript:** Strict mode enabled. No `any` types allowed. Interfaces for objects, Types for unions/primitives.
- **Python:** PEP 484 type hints mandatory. `mypy --strict` enforcement.
- **Naming Conventions:** 
  - `camelCase` for TypeScript variables/functions.
  - `PascalCase` for Classes/Interfaces and React Components.
  - `snake_case` for Python variables/functions/files.
  - `kebab-case` for TypeScript files/folders.

## When
Applied during the writing of code and enforced via CI/CD pipelines (Pre-commit hooks).

## Best Practices
- Single Responsibility Principle (SRP): Functions and classes should do one thing.
- Meaningful variable names (e.g., `is_active` instead of `act`).

## Required Tools
- ESLint + Prettier (Frontend)
- Ruff + Black + Mypy (Backend)
- Husky + Commitlint (Git hooks)

## Forbidden Practices
- Leaving `@ts-ignore` or `# type: ignore` without an extensive justification comment.
- Committing code with unresolved linting warnings.
- Using generic exception handling (`except Exception: pass`).

## Success Criteria
- The CI pipeline passes 100% of linting and typing checks on every PR.
- Code style is indistinguishable between different human or AI authors.
