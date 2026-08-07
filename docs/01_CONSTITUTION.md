# 01 CONSTITUTION

## Vision
To build a highly secure, modular, and scalable Enterprise Identity & Access Management (IAM) platform.

## Why
Identity is the core of modern enterprise software. Building a robust IAM platform ensures that future products, multi-tenant architectures, and complex permission systems have a rock-solid, secure foundation.

## Mandatory Engineering Principles
- **Feature-first Architecture is mandatory:** Code must be grouped by feature/domain, not by generic technical layers.
- **Reusable Components are mandatory:** Never duplicate UI elements. Always abstract into reusable components within `packages/ui`.
- **API Client is mandatory:** Do not use native `fetch()` or `axios()` directly inside components. All API calls must flow through a centralized, typed API client wrapper.
- **TanStack Query is mandatory:** All server state (data fetching, caching, synchronization) MUST be handled by `@tanstack/react-query`. 
- **Zustand is mandatory:** All complex global client state MUST be handled by `zustand`. Avoid prop-drilling or overusing React Context for complex state.
- **Custom Hooks are mandatory:** UI components should be purely presentational. All complex logic must be abstracted into custom React Hooks.
- **Shared Types are mandatory:** Do not declare inline TypeScript interfaces for data models. Always import them from `packages/types`.
- **Shared Validation is mandatory:** Do not duplicate validation logic. Always use shared Zod schemas from `packages/config` or similar.
- **No Direct Fetch / No Inline API Calls:** Components must never contain URLs or direct network requests.
- **No Business Logic Inside Components:** Keep components clean. Move business logic to hooks or utility functions.
- **Smart Components + Dumb Components Pattern:** Utilize container components (smart) to fetch data and pass it to presentational components (dumb) which only handle rendering.
- **Modular Architecture is mandatory:** Ensure strict separation of concerns across the Turborepo packages.

## How
By strictly enforcing the rules laid out in this documentation suite. Every engineer and AI agent must adhere to these principles without exception.

## When
These principles apply immediately and permanently to all phases of development.

## Required Tools
- Turborepo
- Next.js (App Router)
- FastAPI
- PostgreSQL
- Redis

## Forbidden Practices
- Proceeding with development without reading the documentation.
- Bypassing architectural rules for the sake of speed.
- Introducing tight coupling between backend services and frontend components.

## Success Criteria
- The platform can seamlessly support new authentication methods (SAML, OIDC) and multi-tenancy in the future without core refactoring.
- The codebase remains clean, modular, and easy for new developers to understand.
