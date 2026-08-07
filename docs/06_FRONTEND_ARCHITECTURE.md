# 06 FRONTEND ARCHITECTURE

## Objective
To establish a rigid, highly scalable enterprise frontend architecture using Next.js and React.

## Why
Modern web applications easily degrade into unmaintainable states when state management and data fetching are handled inconsistently.

## Strict Data Flow (MANDATORY)
The documentation explicitly enforces this architecture:

`UI` -> `Custom Hook` -> `TanStack Query` -> `API Client` -> `HTTP Layer` -> `Backend API`

## State Management Definitions
- **Server State:** Handled EXCLUSIVELY by **TanStack Query** (React Query).
- **Global State:** Handled EXCLUSIVELY by **Zustand**.
- **Local State:** Handled by standard React `useState`.
- **Forms:** Handled EXCLUSIVELY by **React Hook Form**.
- **Validation:** Handled EXCLUSIVELY by **Zod**.

## How
- All API requests are abstracted into a centralized Axios (or native fetch wrapper) client inside `packages/api-client`.
- React components import custom hooks (e.g., `useUser()`, `useLoginMutation()`).
- These custom hooks wrap `useQuery` or `useMutation` from TanStack Query.
- The TanStack Query functions call the `api-client`.

## When
Applied to every single feature, screen, and component that requires data.

## Best Practices
- Feature-based architecture: Group files by feature (e.g., `features/auth/hooks/useLogin.ts`, `features/auth/components/LoginForm.tsx`) rather than globally separating all hooks and all components.
- Error Boundaries: Implement at the route level to prevent entire application crashes.
- Loading Skeletons: Use `Suspense` and explicit skeleton components instead of simple loading spinners.

## Required Tools
- Next.js App Router
- React 18+
- Tailwind CSS & shadcn/ui
- TanStack Query
- Zustand
- React Hook Form + Zod

## Forbidden Practices
- `Component -> fetch()`
- `Component -> axios()`
- Direct network requests inside UI components.
- Prop drilling for deep global state.

## Success Criteria
- UI components contain zero HTTP logic.
- Forms are fully type-safe from the input field down to the API payload.
- Server state is aggressively cached and optimistic updates are utilized for a snappy UX.
