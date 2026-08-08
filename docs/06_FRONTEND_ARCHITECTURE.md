# 06 FRONTEND ARCHITECTURE

## Objective
Establish a rigid, scalable enterprise frontend architecture using Next.js App Router and React 19.

---

## Strict Data Flow (MANDATORY)

```
UI Component
    ↓
Custom Hook  (e.g. useLogin, useUsers)
    ↓
TanStack Query  (useQuery / useMutation)
    ↓
API Client  (@iam/api-client → authApi, usersApi, …)
    ↓
HTTP Layer  (Axios instance with token injection)
    ↓
FastAPI Backend
```

**Never**: `Component → fetch()` or `Component → axios()` directly.

---

## Feature-Based Folder Structure

All admin features live under `apps/admin/features/`:

```
apps/admin/
  app/                          ← Next.js pages (thin shells only)
    page.tsx                    ← renders <LoginForm />
    dashboard/
      page.tsx                  ← renders dashboard components
  features/
    auth/
      services/auth.service.ts  ← calls API client, manages tokens
      hooks/useLogin.ts         ← useMutation wrapping authService
      components/LoginForm.tsx  ← dumb form component
      components/PasswordInput.tsx
    users/
      services/users.service.ts
      hooks/useUsers.ts
      hooks/useCreateUser.ts
      components/UsersTable.tsx
    roles/
    permissions/
    sessions/
    audit/
```

**Rule**: Page files in `app/` contain zero business logic. They import from `features/`.

---

## State Management

| State type    | Tool                          | Where                        |
| ------------- | ----------------------------- | ---------------------------- |
| Server state  | **TanStack Query**            | `features/*/hooks/`          |
| Global client | **Zustand** (future)          | `stores/` (when needed)      |
| Local UI      | `React.useState`              | inside the component         |
| Forms         | **React Hook Form + Zod**     | `features/*/components/`     |

---

## Shared Packages

| Package              | Purpose                                  |
| -------------------- | ---------------------------------------- |
| `@iam/types`         | Shared TypeScript interfaces & types     |
| `@iam/validation`    | Shared Zod schemas                       |
| `@iam/api-client`    | Axios instance + TanStack QueryProvider + API modules |
| `@iam/ui`            | Radix UI component library               |
| `@iam/design-system` | Tailwind v4 tokens + globals.css         |
| `@iam/hooks`         | Shared custom hooks (future)             |

---

## Required Tools

- Next.js App Router (v16+)
- React 19+
- **Radix UI** (`@radix-ui/*`) — the ONLY permitted UI framework
- Tailwind CSS v4
- class-variance-authority (CVA) for component variants
- Lucide React for icons
- TanStack Query v5 (server state)
- React Hook Form + Zod (forms & validation)
- Zustand (global client state, only when truly needed)
- Axios (HTTP client, via `@iam/api-client` only)

---

## Forbidden Practices

| ❌ Forbidden                                      | ✅ Instead                                |
| ------------------------------------------------- | ----------------------------------------- |
| `Component → fetch()` or `Component → axios()`   | Use a custom hook → TanStack Query        |
| Business logic in page files                      | Move to `features/*/services/` or hooks   |
| Direct `apiClient` calls in components            | Wrap in a service function                |
| Prop drilling for deep global state               | Zustand store (sparingly)                 |
| Hardcoded API URLs                                | `NEXT_PUBLIC_API_URL` env var via client  |
| Multiple UI frameworks                            | Radix UI only                             |

---

## Success Criteria

- UI components contain zero HTTP or business logic
- Forms are type-safe from input → Zod schema → API payload
- Every feature follows the service → hook → component layering
- Server state is cached via TanStack Query with appropriate stale times
- Changing the API base URL requires editing exactly one env variable
