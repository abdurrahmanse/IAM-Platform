# 02 AI RULES

## Objective
To provide absolute, unbreakable constraints for all AI agents operating within this repository.

## Why
AI agents often default to simplistic, non-scalable patterns (like inline fetches or generic component structures) if not strictly bounded. This document ensures enterprise-grade output.

## Specific AI Output Constraints

### AI WILL NEVER
- Duplicate logic.
- Duplicate validation.
- Duplicate types.
- Use native `fetch()` or `axios()` directly inside any UI component.
- Write `useEffect + fetch()` for data loading.
- Make inline API calls inside event handlers.
- Put business logic inside UI components.
- Hardcode endpoints in components or hooks.
- Access the database directly from API routing layers (must use Service layer).
- Duplicate UI components (always use `packages/ui`).

### AI WILL ALWAYS
- Use the centralized, typed **API Client** for all network requests.
- Use the **Service Layer** for backend business logic.
- Create **Custom Hooks** to encapsulate complex React logic.
- Use **TanStack Query** (React Query) for all server state (fetching, caching).
- Use **Zustand** for complex global state.
- Use **Zod** for all validation.
- Use **React Hook Form** for all forms.
- Use **Shared Components** from the UI package exclusively.
- Use **Shared Types** from the Types package exclusively.
- Write **Reusable Code**.
- Follow **Modular Architecture**.
- Follow **SOLID Principles**.
- Follow **DRY** (Don't Repeat Yourself) and **KISS** (Keep It Simple, Stupid).
- Implement **Clean Architecture**.

## How
Agents must parse these rules at the beginning of every prompt and self-correct any generated code that violates them before presenting the final output to the user.

## Required Tools
- AI Prompt Parsing capabilities.
- Context awareness of `packages/types` and `packages/ui`.

## Success Criteria
- AI-generated pull requests pass all linting, type-checking, and architectural reviews without requiring human intervention to fix inline API calls or duplicated types.
