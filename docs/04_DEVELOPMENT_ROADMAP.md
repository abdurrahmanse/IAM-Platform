# 04 DEVELOPMENT ROADMAP

> This roadmap defines the exact engineering requirements, architectures, and AI prompts required to build the IAM Platform over 26 phases.

## Phase 00 — Scaffold & Hello World

### 1. Objective
Initialize the Turborepo monorepo and establish the base Next.js and FastAPI architectures.

### 2. Business Goal
Provide a clean, enterprise-grade workspace that allows independent frontend and backend scaling.

### 3. Features
Turborepo workspace, pnpm setup, FastAPI base app, Next.js proxy, CORS configuration.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-00.01: Turborepo & pnpm Workspace initialization
- SP-00.02: FastAPI Backend base setup
- SP-00.03: Next.js Web App base setup
- SP-00.04: Next.js Admin App base setup
- SP-00.05: API Proxy & CORS Configuration

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
FastAPI health check endpoint `/api/v1/health`.

### 11. Database Tasks
No DB required yet. Scaffold Alembic directory.

### 12. UI Tasks
Scaffold `apps/admin`, `apps/portal`, `apps/website`. Render 'Hello World'.

### 13. UX Tasks
No complex UX yet, establish Tailwind typography base.

### 14. Security Tasks
Configure strict CORS allowing only localhost for development.

### 15. Testing Tasks
Vitest base config. Pytest base config with `TestClient`.

### 16. DevOps Tasks
Commitlint, Husky, Prettier, and ESLint configurations.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 00.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-00.01] Turborepo & pnpm Workspace initialization

```text
TASK ID: SP-00.01
PHASE / SUB-PHASE: 00 — Scaffold & Hello World / 00.01 Turborepo & pnpm Workspace initialization

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: Turborepo & pnpm Workspace initialization.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 00.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-00.02] FastAPI Backend base setup

```text
TASK ID: SP-00.02
PHASE / SUB-PHASE: 00 — Scaffold & Hello World / 00.02 FastAPI Backend base setup

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: FastAPI Backend base setup.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 00.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-00.03] Next.js Web App base setup

```text
TASK ID: SP-00.03
PHASE / SUB-PHASE: 00 — Scaffold & Hello World / 00.03 Next.js Web App base setup

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: Next.js Web App base setup.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 00.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-00.04] Next.js Admin App base setup

```text
TASK ID: SP-00.04
PHASE / SUB-PHASE: 00 — Scaffold & Hello World / 00.04 Next.js Admin App base setup

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: Next.js Admin App base setup.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 00.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-00.05] API Proxy & CORS Configuration

```text
TASK ID: SP-00.05
PHASE / SUB-PHASE: 00 — Scaffold & Hello World / 00.05 API Proxy & CORS Configuration

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API Proxy & CORS Configuration.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 00.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 01 — Core UI & Shared Components

### 1. Objective
Establish the foundational design system using Tailwind and shadcn/ui within a shared workspace package.

### 2. Business Goal
Ensure absolute visual consistency across all portals and accelerate future UI development.

### 3. Features
Shared Button, Input, Modal, Dialog components. Base application layouts with Sidebar/Header.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-01.01: Tailwind CSS & Global styles
- SP-01.02: UI Package: Button & Input components
- SP-01.03: UI Package: Modal & Dialog components
- SP-01.04: Application Layouts (Sidebar, Header, Footer)
- SP-01.05: React Query & Axios Client setup

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
N/A

### 11. Database Tasks
N/A

### 12. UI Tasks
Build purely presentational (dumb) components in `packages/ui`.

### 13. UX Tasks
Implement active states, focus rings for keyboard navigation, and dark mode toggles.

### 14. Security Tasks
Ensure forms prevent XSS via React default escaping.

### 15. Testing Tasks
Component testing using Vitest + React Testing Library.

### 16. DevOps Tasks
Ensure `packages/ui` builds and exports correctly to `apps/*`.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 00.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-01.01] Tailwind CSS & Global styles

```text
TASK ID: SP-01.01
PHASE / SUB-PHASE: 01 — Core UI & Shared Components / 01.01 Tailwind CSS & Global styles

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: Tailwind CSS & Global styles.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 01.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-01.02] UI Package: Button & Input components

```text
TASK ID: SP-01.02
PHASE / SUB-PHASE: 01 — Core UI & Shared Components / 01.02 UI Package: Button & Input components

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI Package: Button & Input components.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 01.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-01.03] UI Package: Modal & Dialog components

```text
TASK ID: SP-01.03
PHASE / SUB-PHASE: 01 — Core UI & Shared Components / 01.03 UI Package: Modal & Dialog components

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI Package: Modal & Dialog components.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 01.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-01.04] Application Layouts (Sidebar, Header, Footer)

```text
TASK ID: SP-01.04
PHASE / SUB-PHASE: 01 — Core UI & Shared Components / 01.04 Application Layouts (Sidebar, Header, Footer)

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: Application Layouts (Sidebar, Header, Footer).

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 01.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-01.05] React Query & Axios Client setup

```text
TASK ID: SP-01.05
PHASE / SUB-PHASE: 01 — Core UI & Shared Components / 01.05 React Query & Axios Client setup

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: React Query & Axios Client setup.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 01.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 02 — Core Database Architecture

### 1. Objective
Setup PostgreSQL, connection pooling, and the base SQLAlchemy ORM models.

### 2. Business Goal
Provide a highly reliable, high-performance data storage layer for the IAM platform.

### 3. Features
Asyncpg integration, SQLAlchemy 2.0 Base class, Audit Mixins (created_at, updated_at).

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-02.01: PostgreSQL setup & connection pooling
- SP-02.02: Alembic Setup & Base Models definition
- SP-02.03: Audit Mixins (created_at, updated_at)
- SP-02.04: Soft Delete Mixins
- SP-02.05: Seeder Script Setup

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
Create `get_db_session` dependency for FastAPI injection.

### 11. Database Tasks
Create SQLAlchemy `Base`, `TimestampMixin`, `SoftDeleteMixin`. Initialize Alembic.

### 12. UI Tasks
N/A

### 13. UX Tasks
N/A

### 14. Security Tasks
Use environment variables for DB connection strings. Never hardcode credentials.

### 15. Testing Tasks
Setup pytest fixtures with a clean test database and rollback after each test.

### 16. DevOps Tasks
Add `docker-compose.yml` for local PostgreSQL and pgAdmin.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 01.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-02.01] PostgreSQL setup & connection pooling

```text
TASK ID: SP-02.01
PHASE / SUB-PHASE: 02 — Core Database Architecture / 02.01 PostgreSQL setup & connection pooling

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: PostgreSQL setup & connection pooling.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 02.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-02.02] Alembic Setup & Base Models definition

```text
TASK ID: SP-02.02
PHASE / SUB-PHASE: 02 — Core Database Architecture / 02.02 Alembic Setup & Base Models definition

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: Alembic Setup & Base Models definition.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 02.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-02.03] Audit Mixins (created_at, updated_at)

```text
TASK ID: SP-02.03
PHASE / SUB-PHASE: 02 — Core Database Architecture / 02.03 Audit Mixins (created_at, updated_at)

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: Audit Mixins (created_at, updated_at).

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 02.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-02.04] Soft Delete Mixins

```text
TASK ID: SP-02.04
PHASE / SUB-PHASE: 02 — Core Database Architecture / 02.04 Soft Delete Mixins

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: Soft Delete Mixins.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 02.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-02.05] Seeder Script Setup

```text
TASK ID: SP-02.05
PHASE / SUB-PHASE: 02 — Core Database Architecture / 02.05 Seeder Script Setup

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: Seeder Script Setup.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 02.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 03 — Local Auth (Email & Password)

### 1. Objective
Implement the core registration and login flows using JWT.

### 2. Business Goal
Allow users to securely create accounts and authenticate into the platform.

### 3. Features
Argon2 password hashing, Access/Refresh JWTs, User Dashboard.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-03.01: DB: User Model & Migrations
- SP-03.02: API: Registration Endpoint
- SP-03.03: UI: Registration Page & Zod Validation
- SP-03.04: API: Login Endpoint & JWT Generation
- SP-03.05: UI: Login Page & Zustand State

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
POST `/auth/register`, POST `/auth/login`. Return standard JSON envelope.

### 11. Database Tasks
Create `User` model with `email`, `hashed_password`, `is_active` fields.

### 12. UI Tasks
Build Register and Login forms using React Hook Form and Zod.

### 13. UX Tasks
Show inline validation errors. Disable submit button while `isPending`.

### 14. Security Tasks
Store Access Token in memory/React State. Store Refresh Token in HttpOnly Secure cookie.

### 15. Testing Tasks
Mock API Client responses for successful/failed logins in UI tests.

### 16. DevOps Tasks
Ensure JWT_SECRET is loaded from secure environment variables.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 02.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-03.01] DB: User Model & Migrations

```text
TASK ID: SP-03.01
PHASE / SUB-PHASE: 03 — Local Auth (Email & Password) / 03.01 DB: User Model & Migrations

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: DB: User Model & Migrations.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 03.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-03.02] API: Registration Endpoint

```text
TASK ID: SP-03.02
PHASE / SUB-PHASE: 03 — Local Auth (Email & Password) / 03.02 API: Registration Endpoint

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Registration Endpoint.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 03.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-03.03] UI: Registration Page & Zod Validation

```text
TASK ID: SP-03.03
PHASE / SUB-PHASE: 03 — Local Auth (Email & Password) / 03.03 UI: Registration Page & Zod Validation

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: Registration Page & Zod Validation.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 03.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-03.04] API: Login Endpoint & JWT Generation

```text
TASK ID: SP-03.04
PHASE / SUB-PHASE: 03 — Local Auth (Email & Password) / 03.04 API: Login Endpoint & JWT Generation

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Login Endpoint & JWT Generation.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 03.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-03.05] UI: Login Page & Zustand State

```text
TASK ID: SP-03.05
PHASE / SUB-PHASE: 03 — Local Auth (Email & Password) / 03.05 UI: Login Page & Zustand State

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: Login Page & Zustand State.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 03.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 04 — Email Verification Flow

### 1. Objective
Require users to verify their email address before accessing the platform.

### 2. Business Goal
Prevent spam accounts and ensure a high-quality user base.

### 3. Features
SMTP integration, Verification Token generation, Email check UI.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-04.01: DB: Verification Token Model
- SP-04.02: API: SMTP Integration & Email Service
- SP-04.03: UI: Check Email Screen
- SP-04.04: API: Verify Token Endpoint
- SP-04.05: UI: Verification Success Page

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
Send email via SMTP on registration. POST `/auth/verify-email`.

### 11. Database Tasks
Create `VerificationToken` model linked to `User`.

### 12. UI Tasks
Create 'Check your Email' page and 'Verification Success' redirect.

### 13. UX Tasks
Provide a 'Resend Email' button with a 60-second cooldown.

### 14. Security Tasks
Tokens must expire in 24 hours. Delete token after single use.

### 15. Testing Tasks
Mock SMTP server in tests to ensure emails are dispatched.

### 16. DevOps Tasks
Provide dummy SMTP credentials (e.g., MailHog) in local docker-compose.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 03.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-04.01] DB: Verification Token Model

```text
TASK ID: SP-04.01
PHASE / SUB-PHASE: 04 — Email Verification Flow / 04.01 DB: Verification Token Model

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: DB: Verification Token Model.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 04.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-04.02] API: SMTP Integration & Email Service

```text
TASK ID: SP-04.02
PHASE / SUB-PHASE: 04 — Email Verification Flow / 04.02 API: SMTP Integration & Email Service

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: SMTP Integration & Email Service.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 04.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-04.03] UI: Check Email Screen

```text
TASK ID: SP-04.03
PHASE / SUB-PHASE: 04 — Email Verification Flow / 04.03 UI: Check Email Screen

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: Check Email Screen.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 04.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-04.04] API: Verify Token Endpoint

```text
TASK ID: SP-04.04
PHASE / SUB-PHASE: 04 — Email Verification Flow / 04.04 API: Verify Token Endpoint

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Verify Token Endpoint.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 04.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-04.05] UI: Verification Success Page

```text
TASK ID: SP-04.05
PHASE / SUB-PHASE: 04 — Email Verification Flow / 04.05 UI: Verification Success Page

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: Verification Success Page.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 04.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 05 — Password Reset Flow

### 1. Objective
Design and implement secure Password Reset functionality.

### 2. Business Goal
Meet enterprise requirements by providing robust Password Reset capabilities.

### 3. Features
Full stack implementation of Password Reset, from DB to UI.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-05.01: DB: Models & Migrations for Password Reset
- SP-05.02: API: Service Layer logic for Password Reset
- SP-05.03: API: Route Controllers for Password Reset
- SP-05.04: UI: API Client Hooks & State for Password Reset
- SP-05.05: UI: React Components & Validation for Password Reset

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
Build RESTful FastAPI endpoints handling Password Reset logic.

### 11. Database Tasks
Create or update SQLAlchemy models required for Password Reset.

### 12. UI Tasks
Build TanStack Query hooks and React UI for Password Reset.

### 13. UX Tasks
Use Loading Skeletons and Toast notifications to ensure a premium feel.

### 14. Security Tasks
Enforce strict RBAC and validate all inputs via Pydantic and Zod.

### 15. Testing Tasks
Ensure 80% minimum coverage for all new services and controllers.

### 16. DevOps Tasks
Validate CI pipeline passes with new dependencies.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 04.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-05.01] DB: Models & Migrations for Password Reset

```text
TASK ID: SP-05.01
PHASE / SUB-PHASE: 05 — Password Reset Flow / 05.01 DB: Models & Migrations for Password Reset

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: DB: Models & Migrations for Password Reset.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 05.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-05.02] API: Service Layer logic for Password Reset

```text
TASK ID: SP-05.02
PHASE / SUB-PHASE: 05 — Password Reset Flow / 05.02 API: Service Layer logic for Password Reset

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Service Layer logic for Password Reset.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 05.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-05.03] API: Route Controllers for Password Reset

```text
TASK ID: SP-05.03
PHASE / SUB-PHASE: 05 — Password Reset Flow / 05.03 API: Route Controllers for Password Reset

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Route Controllers for Password Reset.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 05.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-05.04] UI: API Client Hooks & State for Password Reset

```text
TASK ID: SP-05.04
PHASE / SUB-PHASE: 05 — Password Reset Flow / 05.04 UI: API Client Hooks & State for Password Reset

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: API Client Hooks & State for Password Reset.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 05.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-05.05] UI: React Components & Validation for Password Reset

```text
TASK ID: SP-05.05
PHASE / SUB-PHASE: 05 — Password Reset Flow / 05.05 UI: React Components & Validation for Password Reset

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: React Components & Validation for Password Reset.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 05.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 06 — Profile Management & Avatar

### 1. Objective
Design and implement secure Profile Management functionality.

### 2. Business Goal
Meet enterprise requirements by providing robust Profile Management capabilities.

### 3. Features
Full stack implementation of Profile Management, from DB to UI.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-06.01: DB: Models & Migrations for Profile Management
- SP-06.02: API: Service Layer logic for Profile Management
- SP-06.03: API: Route Controllers for Profile Management
- SP-06.04: UI: API Client Hooks & State for Profile Management
- SP-06.05: UI: React Components & Validation for Profile Management

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
Build RESTful FastAPI endpoints handling Profile Management logic.

### 11. Database Tasks
Create or update SQLAlchemy models required for Profile Management.

### 12. UI Tasks
Build TanStack Query hooks and React UI for Profile Management.

### 13. UX Tasks
Use Loading Skeletons and Toast notifications to ensure a premium feel.

### 14. Security Tasks
Enforce strict RBAC and validate all inputs via Pydantic and Zod.

### 15. Testing Tasks
Ensure 80% minimum coverage for all new services and controllers.

### 16. DevOps Tasks
Validate CI pipeline passes with new dependencies.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 05.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-06.01] DB: Models & Migrations for Profile Management

```text
TASK ID: SP-06.01
PHASE / SUB-PHASE: 06 — Profile Management & Avatar / 06.01 DB: Models & Migrations for Profile Management

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: DB: Models & Migrations for Profile Management.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 06.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-06.02] API: Service Layer logic for Profile Management

```text
TASK ID: SP-06.02
PHASE / SUB-PHASE: 06 — Profile Management & Avatar / 06.02 API: Service Layer logic for Profile Management

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Service Layer logic for Profile Management.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 06.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-06.03] API: Route Controllers for Profile Management

```text
TASK ID: SP-06.03
PHASE / SUB-PHASE: 06 — Profile Management & Avatar / 06.03 API: Route Controllers for Profile Management

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Route Controllers for Profile Management.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 06.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-06.04] UI: API Client Hooks & State for Profile Management

```text
TASK ID: SP-06.04
PHASE / SUB-PHASE: 06 — Profile Management & Avatar / 06.04 UI: API Client Hooks & State for Profile Management

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: API Client Hooks & State for Profile Management.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 06.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-06.05] UI: React Components & Validation for Profile Management

```text
TASK ID: SP-06.05
PHASE / SUB-PHASE: 06 — Profile Management & Avatar / 06.05 UI: React Components & Validation for Profile Management

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: React Components & Validation for Profile Management.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 06.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 07 — Session & Device Management

### 1. Objective
Design and implement secure Session Management functionality.

### 2. Business Goal
Meet enterprise requirements by providing robust Session Management capabilities.

### 3. Features
Full stack implementation of Session Management, from DB to UI.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-07.01: DB: Models & Migrations for Session Management
- SP-07.02: API: Service Layer logic for Session Management
- SP-07.03: API: Route Controllers for Session Management
- SP-07.04: UI: API Client Hooks & State for Session Management
- SP-07.05: UI: React Components & Validation for Session Management

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
Build RESTful FastAPI endpoints handling Session Management logic.

### 11. Database Tasks
Create or update SQLAlchemy models required for Session Management.

### 12. UI Tasks
Build TanStack Query hooks and React UI for Session Management.

### 13. UX Tasks
Use Loading Skeletons and Toast notifications to ensure a premium feel.

### 14. Security Tasks
Enforce strict RBAC and validate all inputs via Pydantic and Zod.

### 15. Testing Tasks
Ensure 80% minimum coverage for all new services and controllers.

### 16. DevOps Tasks
Validate CI pipeline passes with new dependencies.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 06.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-07.01] DB: Models & Migrations for Session Management

```text
TASK ID: SP-07.01
PHASE / SUB-PHASE: 07 — Session & Device Management / 07.01 DB: Models & Migrations for Session Management

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: DB: Models & Migrations for Session Management.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 07.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-07.02] API: Service Layer logic for Session Management

```text
TASK ID: SP-07.02
PHASE / SUB-PHASE: 07 — Session & Device Management / 07.02 API: Service Layer logic for Session Management

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Service Layer logic for Session Management.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 07.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-07.03] API: Route Controllers for Session Management

```text
TASK ID: SP-07.03
PHASE / SUB-PHASE: 07 — Session & Device Management / 07.03 API: Route Controllers for Session Management

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Route Controllers for Session Management.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 07.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-07.04] UI: API Client Hooks & State for Session Management

```text
TASK ID: SP-07.04
PHASE / SUB-PHASE: 07 — Session & Device Management / 07.04 UI: API Client Hooks & State for Session Management

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: API Client Hooks & State for Session Management.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 07.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-07.05] UI: React Components & Validation for Session Management

```text
TASK ID: SP-07.05
PHASE / SUB-PHASE: 07 — Session & Device Management / 07.05 UI: React Components & Validation for Session Management

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: React Components & Validation for Session Management.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 07.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 08 — Two-Factor Authentication (2FA) - TOTP

### 1. Objective
Design and implement secure 2FA TOTP functionality.

### 2. Business Goal
Meet enterprise requirements by providing robust 2FA TOTP capabilities.

### 3. Features
Full stack implementation of 2FA TOTP, from DB to UI.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-08.01: DB: Models & Migrations for 2FA TOTP
- SP-08.02: API: Service Layer logic for 2FA TOTP
- SP-08.03: API: Route Controllers for 2FA TOTP
- SP-08.04: UI: API Client Hooks & State for 2FA TOTP
- SP-08.05: UI: React Components & Validation for 2FA TOTP

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
Build RESTful FastAPI endpoints handling 2FA TOTP logic.

### 11. Database Tasks
Create or update SQLAlchemy models required for 2FA TOTP.

### 12. UI Tasks
Build TanStack Query hooks and React UI for 2FA TOTP.

### 13. UX Tasks
Use Loading Skeletons and Toast notifications to ensure a premium feel.

### 14. Security Tasks
Enforce strict RBAC and validate all inputs via Pydantic and Zod.

### 15. Testing Tasks
Ensure 80% minimum coverage for all new services and controllers.

### 16. DevOps Tasks
Validate CI pipeline passes with new dependencies.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 07.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-08.01] DB: Models & Migrations for 2FA TOTP

```text
TASK ID: SP-08.01
PHASE / SUB-PHASE: 08 — Two-Factor Authentication (2FA) - TOTP / 08.01 DB: Models & Migrations for 2FA TOTP

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: DB: Models & Migrations for 2FA TOTP.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 08.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-08.02] API: Service Layer logic for 2FA TOTP

```text
TASK ID: SP-08.02
PHASE / SUB-PHASE: 08 — Two-Factor Authentication (2FA) - TOTP / 08.02 API: Service Layer logic for 2FA TOTP

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Service Layer logic for 2FA TOTP.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 08.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-08.03] API: Route Controllers for 2FA TOTP

```text
TASK ID: SP-08.03
PHASE / SUB-PHASE: 08 — Two-Factor Authentication (2FA) - TOTP / 08.03 API: Route Controllers for 2FA TOTP

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Route Controllers for 2FA TOTP.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 08.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-08.04] UI: API Client Hooks & State for 2FA TOTP

```text
TASK ID: SP-08.04
PHASE / SUB-PHASE: 08 — Two-Factor Authentication (2FA) - TOTP / 08.04 UI: API Client Hooks & State for 2FA TOTP

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: API Client Hooks & State for 2FA TOTP.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 08.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-08.05] UI: React Components & Validation for 2FA TOTP

```text
TASK ID: SP-08.05
PHASE / SUB-PHASE: 08 — Two-Factor Authentication (2FA) - TOTP / 08.05 UI: React Components & Validation for 2FA TOTP

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: React Components & Validation for 2FA TOTP.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 08.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 09 — OAuth2 / Social Login

### 1. Objective
Design and implement secure OAuth2 integration functionality.

### 2. Business Goal
Meet enterprise requirements by providing robust OAuth2 integration capabilities.

### 3. Features
Full stack implementation of OAuth2 integration, from DB to UI.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-09.01: DB: Models & Migrations for OAuth2 integration
- SP-09.02: API: Service Layer logic for OAuth2 integration
- SP-09.03: API: Route Controllers for OAuth2 integration
- SP-09.04: UI: API Client Hooks & State for OAuth2 integration
- SP-09.05: UI: React Components & Validation for OAuth2 integration

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
Build RESTful FastAPI endpoints handling OAuth2 integration logic.

### 11. Database Tasks
Create or update SQLAlchemy models required for OAuth2 integration.

### 12. UI Tasks
Build TanStack Query hooks and React UI for OAuth2 integration.

### 13. UX Tasks
Use Loading Skeletons and Toast notifications to ensure a premium feel.

### 14. Security Tasks
Enforce strict RBAC and validate all inputs via Pydantic and Zod.

### 15. Testing Tasks
Ensure 80% minimum coverage for all new services and controllers.

### 16. DevOps Tasks
Validate CI pipeline passes with new dependencies.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 08.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-09.01] DB: Models & Migrations for OAuth2 integration

```text
TASK ID: SP-09.01
PHASE / SUB-PHASE: 09 — OAuth2 / Social Login / 09.01 DB: Models & Migrations for OAuth2 integration

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: DB: Models & Migrations for OAuth2 integration.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 09.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-09.02] API: Service Layer logic for OAuth2 integration

```text
TASK ID: SP-09.02
PHASE / SUB-PHASE: 09 — OAuth2 / Social Login / 09.02 API: Service Layer logic for OAuth2 integration

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Service Layer logic for OAuth2 integration.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 09.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-09.03] API: Route Controllers for OAuth2 integration

```text
TASK ID: SP-09.03
PHASE / SUB-PHASE: 09 — OAuth2 / Social Login / 09.03 API: Route Controllers for OAuth2 integration

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Route Controllers for OAuth2 integration.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 09.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-09.04] UI: API Client Hooks & State for OAuth2 integration

```text
TASK ID: SP-09.04
PHASE / SUB-PHASE: 09 — OAuth2 / Social Login / 09.04 UI: API Client Hooks & State for OAuth2 integration

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: API Client Hooks & State for OAuth2 integration.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 09.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-09.05] UI: React Components & Validation for OAuth2 integration

```text
TASK ID: SP-09.05
PHASE / SUB-PHASE: 09 — OAuth2 / Social Login / 09.05 UI: React Components & Validation for OAuth2 integration

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: React Components & Validation for OAuth2 integration.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 09.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 10 — Multi-Tenant / Organization Architecture

### 1. Objective
Design and implement secure Multi-Tenancy functionality.

### 2. Business Goal
Meet enterprise requirements by providing robust Multi-Tenancy capabilities.

### 3. Features
Full stack implementation of Multi-Tenancy, from DB to UI.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-10.01: DB: Models & Migrations for Multi-Tenancy
- SP-10.02: API: Service Layer logic for Multi-Tenancy
- SP-10.03: API: Route Controllers for Multi-Tenancy
- SP-10.04: UI: API Client Hooks & State for Multi-Tenancy
- SP-10.05: UI: React Components & Validation for Multi-Tenancy

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
Build RESTful FastAPI endpoints handling Multi-Tenancy logic.

### 11. Database Tasks
Create or update SQLAlchemy models required for Multi-Tenancy.

### 12. UI Tasks
Build TanStack Query hooks and React UI for Multi-Tenancy.

### 13. UX Tasks
Use Loading Skeletons and Toast notifications to ensure a premium feel.

### 14. Security Tasks
Enforce strict RBAC and validate all inputs via Pydantic and Zod.

### 15. Testing Tasks
Ensure 80% minimum coverage for all new services and controllers.

### 16. DevOps Tasks
Validate CI pipeline passes with new dependencies.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 09.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-10.01] DB: Models & Migrations for Multi-Tenancy

```text
TASK ID: SP-10.01
PHASE / SUB-PHASE: 10 — Multi-Tenant / Organization Architecture / 10.01 DB: Models & Migrations for Multi-Tenancy

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: DB: Models & Migrations for Multi-Tenancy.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 10.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-10.02] API: Service Layer logic for Multi-Tenancy

```text
TASK ID: SP-10.02
PHASE / SUB-PHASE: 10 — Multi-Tenant / Organization Architecture / 10.02 API: Service Layer logic for Multi-Tenancy

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Service Layer logic for Multi-Tenancy.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 10.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-10.03] API: Route Controllers for Multi-Tenancy

```text
TASK ID: SP-10.03
PHASE / SUB-PHASE: 10 — Multi-Tenant / Organization Architecture / 10.03 API: Route Controllers for Multi-Tenancy

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Route Controllers for Multi-Tenancy.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 10.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-10.04] UI: API Client Hooks & State for Multi-Tenancy

```text
TASK ID: SP-10.04
PHASE / SUB-PHASE: 10 — Multi-Tenant / Organization Architecture / 10.04 UI: API Client Hooks & State for Multi-Tenancy

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: API Client Hooks & State for Multi-Tenancy.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 10.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-10.05] UI: React Components & Validation for Multi-Tenancy

```text
TASK ID: SP-10.05
PHASE / SUB-PHASE: 10 — Multi-Tenant / Organization Architecture / 10.05 UI: React Components & Validation for Multi-Tenancy

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: React Components & Validation for Multi-Tenancy.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 10.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 11 — Core RBAC (Role-Based Access Control)

### 1. Objective
Design and implement secure RBAC Permissions functionality.

### 2. Business Goal
Meet enterprise requirements by providing robust RBAC Permissions capabilities.

### 3. Features
Full stack implementation of RBAC Permissions, from DB to UI.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-11.01: DB: Models & Migrations for RBAC Permissions
- SP-11.02: API: Service Layer logic for RBAC Permissions
- SP-11.03: API: Route Controllers for RBAC Permissions
- SP-11.04: UI: API Client Hooks & State for RBAC Permissions
- SP-11.05: UI: React Components & Validation for RBAC Permissions

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
Build RESTful FastAPI endpoints handling RBAC Permissions logic.

### 11. Database Tasks
Create or update SQLAlchemy models required for RBAC Permissions.

### 12. UI Tasks
Build TanStack Query hooks and React UI for RBAC Permissions.

### 13. UX Tasks
Use Loading Skeletons and Toast notifications to ensure a premium feel.

### 14. Security Tasks
Enforce strict RBAC and validate all inputs via Pydantic and Zod.

### 15. Testing Tasks
Ensure 80% minimum coverage for all new services and controllers.

### 16. DevOps Tasks
Validate CI pipeline passes with new dependencies.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 10.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-11.01] DB: Models & Migrations for RBAC Permissions

```text
TASK ID: SP-11.01
PHASE / SUB-PHASE: 11 — Core RBAC (Role-Based Access Control) / 11.01 DB: Models & Migrations for RBAC Permissions

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: DB: Models & Migrations for RBAC Permissions.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 11.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-11.02] API: Service Layer logic for RBAC Permissions

```text
TASK ID: SP-11.02
PHASE / SUB-PHASE: 11 — Core RBAC (Role-Based Access Control) / 11.02 API: Service Layer logic for RBAC Permissions

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Service Layer logic for RBAC Permissions.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 11.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-11.03] API: Route Controllers for RBAC Permissions

```text
TASK ID: SP-11.03
PHASE / SUB-PHASE: 11 — Core RBAC (Role-Based Access Control) / 11.03 API: Route Controllers for RBAC Permissions

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Route Controllers for RBAC Permissions.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 11.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-11.04] UI: API Client Hooks & State for RBAC Permissions

```text
TASK ID: SP-11.04
PHASE / SUB-PHASE: 11 — Core RBAC (Role-Based Access Control) / 11.04 UI: API Client Hooks & State for RBAC Permissions

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: API Client Hooks & State for RBAC Permissions.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 11.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-11.05] UI: React Components & Validation for RBAC Permissions

```text
TASK ID: SP-11.05
PHASE / SUB-PHASE: 11 — Core RBAC (Role-Based Access Control) / 11.05 UI: React Components & Validation for RBAC Permissions

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: React Components & Validation for RBAC Permissions.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 11.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 12 — Organization Member Management

### 1. Objective
Design and implement secure Org Members functionality.

### 2. Business Goal
Meet enterprise requirements by providing robust Org Members capabilities.

### 3. Features
Full stack implementation of Org Members, from DB to UI.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-12.01: DB: Models & Migrations for Org Members
- SP-12.02: API: Service Layer logic for Org Members
- SP-12.03: API: Route Controllers for Org Members
- SP-12.04: UI: API Client Hooks & State for Org Members
- SP-12.05: UI: React Components & Validation for Org Members

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
Build RESTful FastAPI endpoints handling Org Members logic.

### 11. Database Tasks
Create or update SQLAlchemy models required for Org Members.

### 12. UI Tasks
Build TanStack Query hooks and React UI for Org Members.

### 13. UX Tasks
Use Loading Skeletons and Toast notifications to ensure a premium feel.

### 14. Security Tasks
Enforce strict RBAC and validate all inputs via Pydantic and Zod.

### 15. Testing Tasks
Ensure 80% minimum coverage for all new services and controllers.

### 16. DevOps Tasks
Validate CI pipeline passes with new dependencies.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 11.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-12.01] DB: Models & Migrations for Org Members

```text
TASK ID: SP-12.01
PHASE / SUB-PHASE: 12 — Organization Member Management / 12.01 DB: Models & Migrations for Org Members

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: DB: Models & Migrations for Org Members.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 12.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-12.02] API: Service Layer logic for Org Members

```text
TASK ID: SP-12.02
PHASE / SUB-PHASE: 12 — Organization Member Management / 12.02 API: Service Layer logic for Org Members

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Service Layer logic for Org Members.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 12.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-12.03] API: Route Controllers for Org Members

```text
TASK ID: SP-12.03
PHASE / SUB-PHASE: 12 — Organization Member Management / 12.03 API: Route Controllers for Org Members

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Route Controllers for Org Members.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 12.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-12.04] UI: API Client Hooks & State for Org Members

```text
TASK ID: SP-12.04
PHASE / SUB-PHASE: 12 — Organization Member Management / 12.04 UI: API Client Hooks & State for Org Members

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: API Client Hooks & State for Org Members.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 12.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-12.05] UI: React Components & Validation for Org Members

```text
TASK ID: SP-12.05
PHASE / SUB-PHASE: 12 — Organization Member Management / 12.05 UI: React Components & Validation for Org Members

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: React Components & Validation for Org Members.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 12.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 13 — Custom Role Management

### 1. Objective
Design and implement secure Custom Roles functionality.

### 2. Business Goal
Meet enterprise requirements by providing robust Custom Roles capabilities.

### 3. Features
Full stack implementation of Custom Roles, from DB to UI.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-13.01: DB: Models & Migrations for Custom Roles
- SP-13.02: API: Service Layer logic for Custom Roles
- SP-13.03: API: Route Controllers for Custom Roles
- SP-13.04: UI: API Client Hooks & State for Custom Roles
- SP-13.05: UI: React Components & Validation for Custom Roles

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
Build RESTful FastAPI endpoints handling Custom Roles logic.

### 11. Database Tasks
Create or update SQLAlchemy models required for Custom Roles.

### 12. UI Tasks
Build TanStack Query hooks and React UI for Custom Roles.

### 13. UX Tasks
Use Loading Skeletons and Toast notifications to ensure a premium feel.

### 14. Security Tasks
Enforce strict RBAC and validate all inputs via Pydantic and Zod.

### 15. Testing Tasks
Ensure 80% minimum coverage for all new services and controllers.

### 16. DevOps Tasks
Validate CI pipeline passes with new dependencies.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 12.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-13.01] DB: Models & Migrations for Custom Roles

```text
TASK ID: SP-13.01
PHASE / SUB-PHASE: 13 — Custom Role Management / 13.01 DB: Models & Migrations for Custom Roles

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: DB: Models & Migrations for Custom Roles.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 13.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-13.02] API: Service Layer logic for Custom Roles

```text
TASK ID: SP-13.02
PHASE / SUB-PHASE: 13 — Custom Role Management / 13.02 API: Service Layer logic for Custom Roles

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Service Layer logic for Custom Roles.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 13.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-13.03] API: Route Controllers for Custom Roles

```text
TASK ID: SP-13.03
PHASE / SUB-PHASE: 13 — Custom Role Management / 13.03 API: Route Controllers for Custom Roles

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Route Controllers for Custom Roles.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 13.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-13.04] UI: API Client Hooks & State for Custom Roles

```text
TASK ID: SP-13.04
PHASE / SUB-PHASE: 13 — Custom Role Management / 13.04 UI: API Client Hooks & State for Custom Roles

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: API Client Hooks & State for Custom Roles.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 13.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-13.05] UI: React Components & Validation for Custom Roles

```text
TASK ID: SP-13.05
PHASE / SUB-PHASE: 13 — Custom Role Management / 13.05 UI: React Components & Validation for Custom Roles

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: React Components & Validation for Custom Roles.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 13.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 14 — User Impersonation (Super Admin)

### 1. Objective
Design and implement secure Impersonation functionality.

### 2. Business Goal
Meet enterprise requirements by providing robust Impersonation capabilities.

### 3. Features
Full stack implementation of Impersonation, from DB to UI.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-14.01: DB: Models & Migrations for Impersonation
- SP-14.02: API: Service Layer logic for Impersonation
- SP-14.03: API: Route Controllers for Impersonation
- SP-14.04: UI: API Client Hooks & State for Impersonation
- SP-14.05: UI: React Components & Validation for Impersonation

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
Build RESTful FastAPI endpoints handling Impersonation logic.

### 11. Database Tasks
Create or update SQLAlchemy models required for Impersonation.

### 12. UI Tasks
Build TanStack Query hooks and React UI for Impersonation.

### 13. UX Tasks
Use Loading Skeletons and Toast notifications to ensure a premium feel.

### 14. Security Tasks
Enforce strict RBAC and validate all inputs via Pydantic and Zod.

### 15. Testing Tasks
Ensure 80% minimum coverage for all new services and controllers.

### 16. DevOps Tasks
Validate CI pipeline passes with new dependencies.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 13.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-14.01] DB: Models & Migrations for Impersonation

```text
TASK ID: SP-14.01
PHASE / SUB-PHASE: 14 — User Impersonation (Super Admin) / 14.01 DB: Models & Migrations for Impersonation

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: DB: Models & Migrations for Impersonation.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 14.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-14.02] API: Service Layer logic for Impersonation

```text
TASK ID: SP-14.02
PHASE / SUB-PHASE: 14 — User Impersonation (Super Admin) / 14.02 API: Service Layer logic for Impersonation

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Service Layer logic for Impersonation.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 14.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-14.03] API: Route Controllers for Impersonation

```text
TASK ID: SP-14.03
PHASE / SUB-PHASE: 14 — User Impersonation (Super Admin) / 14.03 API: Route Controllers for Impersonation

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Route Controllers for Impersonation.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 14.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-14.04] UI: API Client Hooks & State for Impersonation

```text
TASK ID: SP-14.04
PHASE / SUB-PHASE: 14 — User Impersonation (Super Admin) / 14.04 UI: API Client Hooks & State for Impersonation

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: API Client Hooks & State for Impersonation.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 14.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-14.05] UI: React Components & Validation for Impersonation

```text
TASK ID: SP-14.05
PHASE / SUB-PHASE: 14 — User Impersonation (Super Admin) / 14.05 UI: React Components & Validation for Impersonation

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: React Components & Validation for Impersonation.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 14.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 15 — Developer API Keys

### 1. Objective
Design and implement secure API Keys functionality.

### 2. Business Goal
Meet enterprise requirements by providing robust API Keys capabilities.

### 3. Features
Full stack implementation of API Keys, from DB to UI.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-15.01: DB: Models & Migrations for API Keys
- SP-15.02: API: Service Layer logic for API Keys
- SP-15.03: API: Route Controllers for API Keys
- SP-15.04: UI: API Client Hooks & State for API Keys
- SP-15.05: UI: React Components & Validation for API Keys

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
Build RESTful FastAPI endpoints handling API Keys logic.

### 11. Database Tasks
Create or update SQLAlchemy models required for API Keys.

### 12. UI Tasks
Build TanStack Query hooks and React UI for API Keys.

### 13. UX Tasks
Use Loading Skeletons and Toast notifications to ensure a premium feel.

### 14. Security Tasks
Enforce strict RBAC and validate all inputs via Pydantic and Zod.

### 15. Testing Tasks
Ensure 80% minimum coverage for all new services and controllers.

### 16. DevOps Tasks
Validate CI pipeline passes with new dependencies.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 14.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-15.01] DB: Models & Migrations for API Keys

```text
TASK ID: SP-15.01
PHASE / SUB-PHASE: 15 — Developer API Keys / 15.01 DB: Models & Migrations for API Keys

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: DB: Models & Migrations for API Keys.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 15.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-15.02] API: Service Layer logic for API Keys

```text
TASK ID: SP-15.02
PHASE / SUB-PHASE: 15 — Developer API Keys / 15.02 API: Service Layer logic for API Keys

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Service Layer logic for API Keys.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 15.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-15.03] API: Route Controllers for API Keys

```text
TASK ID: SP-15.03
PHASE / SUB-PHASE: 15 — Developer API Keys / 15.03 API: Route Controllers for API Keys

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Route Controllers for API Keys.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 15.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-15.04] UI: API Client Hooks & State for API Keys

```text
TASK ID: SP-15.04
PHASE / SUB-PHASE: 15 — Developer API Keys / 15.04 UI: API Client Hooks & State for API Keys

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: API Client Hooks & State for API Keys.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 15.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-15.05] UI: React Components & Validation for API Keys

```text
TASK ID: SP-15.05
PHASE / SUB-PHASE: 15 — Developer API Keys / 15.05 UI: React Components & Validation for API Keys

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: React Components & Validation for API Keys.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 15.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 16 — System Audit Logs

### 1. Objective
Design and implement secure Audit Logging functionality.

### 2. Business Goal
Meet enterprise requirements by providing robust Audit Logging capabilities.

### 3. Features
Full stack implementation of Audit Logging, from DB to UI.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-16.01: DB: Models & Migrations for Audit Logging
- SP-16.02: API: Service Layer logic for Audit Logging
- SP-16.03: API: Route Controllers for Audit Logging
- SP-16.04: UI: API Client Hooks & State for Audit Logging
- SP-16.05: UI: React Components & Validation for Audit Logging

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
Build RESTful FastAPI endpoints handling Audit Logging logic.

### 11. Database Tasks
Create or update SQLAlchemy models required for Audit Logging.

### 12. UI Tasks
Build TanStack Query hooks and React UI for Audit Logging.

### 13. UX Tasks
Use Loading Skeletons and Toast notifications to ensure a premium feel.

### 14. Security Tasks
Enforce strict RBAC and validate all inputs via Pydantic and Zod.

### 15. Testing Tasks
Ensure 80% minimum coverage for all new services and controllers.

### 16. DevOps Tasks
Validate CI pipeline passes with new dependencies.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 15.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-16.01] DB: Models & Migrations for Audit Logging

```text
TASK ID: SP-16.01
PHASE / SUB-PHASE: 16 — System Audit Logs / 16.01 DB: Models & Migrations for Audit Logging

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: DB: Models & Migrations for Audit Logging.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 16.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-16.02] API: Service Layer logic for Audit Logging

```text
TASK ID: SP-16.02
PHASE / SUB-PHASE: 16 — System Audit Logs / 16.02 API: Service Layer logic for Audit Logging

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Service Layer logic for Audit Logging.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 16.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-16.03] API: Route Controllers for Audit Logging

```text
TASK ID: SP-16.03
PHASE / SUB-PHASE: 16 — System Audit Logs / 16.03 API: Route Controllers for Audit Logging

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Route Controllers for Audit Logging.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 16.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-16.04] UI: API Client Hooks & State for Audit Logging

```text
TASK ID: SP-16.04
PHASE / SUB-PHASE: 16 — System Audit Logs / 16.04 UI: API Client Hooks & State for Audit Logging

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: API Client Hooks & State for Audit Logging.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 16.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-16.05] UI: React Components & Validation for Audit Logging

```text
TASK ID: SP-16.05
PHASE / SUB-PHASE: 16 — System Audit Logs / 16.05 UI: React Components & Validation for Audit Logging

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: React Components & Validation for Audit Logging.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 16.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 17 — Webhooks System

### 1. Objective
Design and implement secure Webhooks functionality.

### 2. Business Goal
Meet enterprise requirements by providing robust Webhooks capabilities.

### 3. Features
Full stack implementation of Webhooks, from DB to UI.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-17.01: DB: Models & Migrations for Webhooks
- SP-17.02: API: Service Layer logic for Webhooks
- SP-17.03: API: Route Controllers for Webhooks
- SP-17.04: UI: API Client Hooks & State for Webhooks
- SP-17.05: UI: React Components & Validation for Webhooks

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
Build RESTful FastAPI endpoints handling Webhooks logic.

### 11. Database Tasks
Create or update SQLAlchemy models required for Webhooks.

### 12. UI Tasks
Build TanStack Query hooks and React UI for Webhooks.

### 13. UX Tasks
Use Loading Skeletons and Toast notifications to ensure a premium feel.

### 14. Security Tasks
Enforce strict RBAC and validate all inputs via Pydantic and Zod.

### 15. Testing Tasks
Ensure 80% minimum coverage for all new services and controllers.

### 16. DevOps Tasks
Validate CI pipeline passes with new dependencies.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 16.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-17.01] DB: Models & Migrations for Webhooks

```text
TASK ID: SP-17.01
PHASE / SUB-PHASE: 17 — Webhooks System / 17.01 DB: Models & Migrations for Webhooks

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: DB: Models & Migrations for Webhooks.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 17.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-17.02] API: Service Layer logic for Webhooks

```text
TASK ID: SP-17.02
PHASE / SUB-PHASE: 17 — Webhooks System / 17.02 API: Service Layer logic for Webhooks

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Service Layer logic for Webhooks.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 17.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-17.03] API: Route Controllers for Webhooks

```text
TASK ID: SP-17.03
PHASE / SUB-PHASE: 17 — Webhooks System / 17.03 API: Route Controllers for Webhooks

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Route Controllers for Webhooks.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 17.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-17.04] UI: API Client Hooks & State for Webhooks

```text
TASK ID: SP-17.04
PHASE / SUB-PHASE: 17 — Webhooks System / 17.04 UI: API Client Hooks & State for Webhooks

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: API Client Hooks & State for Webhooks.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 17.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-17.05] UI: React Components & Validation for Webhooks

```text
TASK ID: SP-17.05
PHASE / SUB-PHASE: 17 — Webhooks System / 17.05 UI: React Components & Validation for Webhooks

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: React Components & Validation for Webhooks.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 17.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 18 — Notification System

### 1. Objective
Design and implement secure Notifications functionality.

### 2. Business Goal
Meet enterprise requirements by providing robust Notifications capabilities.

### 3. Features
Full stack implementation of Notifications, from DB to UI.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-18.01: DB: Models & Migrations for Notifications
- SP-18.02: API: Service Layer logic for Notifications
- SP-18.03: API: Route Controllers for Notifications
- SP-18.04: UI: API Client Hooks & State for Notifications
- SP-18.05: UI: React Components & Validation for Notifications

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
Build RESTful FastAPI endpoints handling Notifications logic.

### 11. Database Tasks
Create or update SQLAlchemy models required for Notifications.

### 12. UI Tasks
Build TanStack Query hooks and React UI for Notifications.

### 13. UX Tasks
Use Loading Skeletons and Toast notifications to ensure a premium feel.

### 14. Security Tasks
Enforce strict RBAC and validate all inputs via Pydantic and Zod.

### 15. Testing Tasks
Ensure 80% minimum coverage for all new services and controllers.

### 16. DevOps Tasks
Validate CI pipeline passes with new dependencies.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 17.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-18.01] DB: Models & Migrations for Notifications

```text
TASK ID: SP-18.01
PHASE / SUB-PHASE: 18 — Notification System / 18.01 DB: Models & Migrations for Notifications

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: DB: Models & Migrations for Notifications.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 18.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-18.02] API: Service Layer logic for Notifications

```text
TASK ID: SP-18.02
PHASE / SUB-PHASE: 18 — Notification System / 18.02 API: Service Layer logic for Notifications

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Service Layer logic for Notifications.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 18.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-18.03] API: Route Controllers for Notifications

```text
TASK ID: SP-18.03
PHASE / SUB-PHASE: 18 — Notification System / 18.03 API: Route Controllers for Notifications

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Route Controllers for Notifications.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 18.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-18.04] UI: API Client Hooks & State for Notifications

```text
TASK ID: SP-18.04
PHASE / SUB-PHASE: 18 — Notification System / 18.04 UI: API Client Hooks & State for Notifications

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: API Client Hooks & State for Notifications.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 18.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-18.05] UI: React Components & Validation for Notifications

```text
TASK ID: SP-18.05
PHASE / SUB-PHASE: 18 — Notification System / 18.05 UI: React Components & Validation for Notifications

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: React Components & Validation for Notifications.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 18.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 19 — Subscription & Billing Setup (Stripe)

### 1. Objective
Design and implement secure Stripe Setup functionality.

### 2. Business Goal
Meet enterprise requirements by providing robust Stripe Setup capabilities.

### 3. Features
Full stack implementation of Stripe Setup, from DB to UI.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-19.01: DB: Models & Migrations for Stripe Setup
- SP-19.02: API: Service Layer logic for Stripe Setup
- SP-19.03: API: Route Controllers for Stripe Setup
- SP-19.04: UI: API Client Hooks & State for Stripe Setup
- SP-19.05: UI: React Components & Validation for Stripe Setup

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
Build RESTful FastAPI endpoints handling Stripe Setup logic.

### 11. Database Tasks
Create or update SQLAlchemy models required for Stripe Setup.

### 12. UI Tasks
Build TanStack Query hooks and React UI for Stripe Setup.

### 13. UX Tasks
Use Loading Skeletons and Toast notifications to ensure a premium feel.

### 14. Security Tasks
Enforce strict RBAC and validate all inputs via Pydantic and Zod.

### 15. Testing Tasks
Ensure 80% minimum coverage for all new services and controllers.

### 16. DevOps Tasks
Validate CI pipeline passes with new dependencies.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 18.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-19.01] DB: Models & Migrations for Stripe Setup

```text
TASK ID: SP-19.01
PHASE / SUB-PHASE: 19 — Subscription & Billing Setup (Stripe) / 19.01 DB: Models & Migrations for Stripe Setup

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: DB: Models & Migrations for Stripe Setup.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 19.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-19.02] API: Service Layer logic for Stripe Setup

```text
TASK ID: SP-19.02
PHASE / SUB-PHASE: 19 — Subscription & Billing Setup (Stripe) / 19.02 API: Service Layer logic for Stripe Setup

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Service Layer logic for Stripe Setup.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 19.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-19.03] API: Route Controllers for Stripe Setup

```text
TASK ID: SP-19.03
PHASE / SUB-PHASE: 19 — Subscription & Billing Setup (Stripe) / 19.03 API: Route Controllers for Stripe Setup

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Route Controllers for Stripe Setup.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 19.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-19.04] UI: API Client Hooks & State for Stripe Setup

```text
TASK ID: SP-19.04
PHASE / SUB-PHASE: 19 — Subscription & Billing Setup (Stripe) / 19.04 UI: API Client Hooks & State for Stripe Setup

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: API Client Hooks & State for Stripe Setup.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 19.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-19.05] UI: React Components & Validation for Stripe Setup

```text
TASK ID: SP-19.05
PHASE / SUB-PHASE: 19 — Subscription & Billing Setup (Stripe) / 19.05 UI: React Components & Validation for Stripe Setup

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: React Components & Validation for Stripe Setup.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 19.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 20 — Billing Management

### 1. Objective
Design and implement secure Stripe Management functionality.

### 2. Business Goal
Meet enterprise requirements by providing robust Stripe Management capabilities.

### 3. Features
Full stack implementation of Stripe Management, from DB to UI.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-20.01: DB: Models & Migrations for Stripe Management
- SP-20.02: API: Service Layer logic for Stripe Management
- SP-20.03: API: Route Controllers for Stripe Management
- SP-20.04: UI: API Client Hooks & State for Stripe Management
- SP-20.05: UI: React Components & Validation for Stripe Management

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
Build RESTful FastAPI endpoints handling Stripe Management logic.

### 11. Database Tasks
Create or update SQLAlchemy models required for Stripe Management.

### 12. UI Tasks
Build TanStack Query hooks and React UI for Stripe Management.

### 13. UX Tasks
Use Loading Skeletons and Toast notifications to ensure a premium feel.

### 14. Security Tasks
Enforce strict RBAC and validate all inputs via Pydantic and Zod.

### 15. Testing Tasks
Ensure 80% minimum coverage for all new services and controllers.

### 16. DevOps Tasks
Validate CI pipeline passes with new dependencies.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 19.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-20.01] DB: Models & Migrations for Stripe Management

```text
TASK ID: SP-20.01
PHASE / SUB-PHASE: 20 — Billing Management / 20.01 DB: Models & Migrations for Stripe Management

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: DB: Models & Migrations for Stripe Management.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 20.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-20.02] API: Service Layer logic for Stripe Management

```text
TASK ID: SP-20.02
PHASE / SUB-PHASE: 20 — Billing Management / 20.02 API: Service Layer logic for Stripe Management

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Service Layer logic for Stripe Management.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 20.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-20.03] API: Route Controllers for Stripe Management

```text
TASK ID: SP-20.03
PHASE / SUB-PHASE: 20 — Billing Management / 20.03 API: Route Controllers for Stripe Management

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Route Controllers for Stripe Management.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 20.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-20.04] UI: API Client Hooks & State for Stripe Management

```text
TASK ID: SP-20.04
PHASE / SUB-PHASE: 20 — Billing Management / 20.04 UI: API Client Hooks & State for Stripe Management

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: API Client Hooks & State for Stripe Management.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 20.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-20.05] UI: React Components & Validation for Stripe Management

```text
TASK ID: SP-20.05
PHASE / SUB-PHASE: 20 — Billing Management / 20.05 UI: React Components & Validation for Stripe Management

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: React Components & Validation for Stripe Management.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 20.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 21 — Advanced Rate Limiting & Abuse Prevention

### 1. Objective
Design and implement secure Rate Limiting functionality.

### 2. Business Goal
Meet enterprise requirements by providing robust Rate Limiting capabilities.

### 3. Features
Full stack implementation of Rate Limiting, from DB to UI.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-21.01: DB: Models & Migrations for Rate Limiting
- SP-21.02: API: Service Layer logic for Rate Limiting
- SP-21.03: API: Route Controllers for Rate Limiting
- SP-21.04: UI: API Client Hooks & State for Rate Limiting
- SP-21.05: UI: React Components & Validation for Rate Limiting

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
Build RESTful FastAPI endpoints handling Rate Limiting logic.

### 11. Database Tasks
Create or update SQLAlchemy models required for Rate Limiting.

### 12. UI Tasks
Build TanStack Query hooks and React UI for Rate Limiting.

### 13. UX Tasks
Use Loading Skeletons and Toast notifications to ensure a premium feel.

### 14. Security Tasks
Enforce strict RBAC and validate all inputs via Pydantic and Zod.

### 15. Testing Tasks
Ensure 80% minimum coverage for all new services and controllers.

### 16. DevOps Tasks
Validate CI pipeline passes with new dependencies.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 20.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-21.01] DB: Models & Migrations for Rate Limiting

```text
TASK ID: SP-21.01
PHASE / SUB-PHASE: 21 — Advanced Rate Limiting & Abuse Prevention / 21.01 DB: Models & Migrations for Rate Limiting

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: DB: Models & Migrations for Rate Limiting.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 21.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-21.02] API: Service Layer logic for Rate Limiting

```text
TASK ID: SP-21.02
PHASE / SUB-PHASE: 21 — Advanced Rate Limiting & Abuse Prevention / 21.02 API: Service Layer logic for Rate Limiting

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Service Layer logic for Rate Limiting.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 21.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-21.03] API: Route Controllers for Rate Limiting

```text
TASK ID: SP-21.03
PHASE / SUB-PHASE: 21 — Advanced Rate Limiting & Abuse Prevention / 21.03 API: Route Controllers for Rate Limiting

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Route Controllers for Rate Limiting.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 21.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-21.04] UI: API Client Hooks & State for Rate Limiting

```text
TASK ID: SP-21.04
PHASE / SUB-PHASE: 21 — Advanced Rate Limiting & Abuse Prevention / 21.04 UI: API Client Hooks & State for Rate Limiting

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: API Client Hooks & State for Rate Limiting.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 21.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-21.05] UI: React Components & Validation for Rate Limiting

```text
TASK ID: SP-21.05
PHASE / SUB-PHASE: 21 — Advanced Rate Limiting & Abuse Prevention / 21.05 UI: React Components & Validation for Rate Limiting

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: React Components & Validation for Rate Limiting.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 21.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 22 — Analytics & Telemetry Dashboard

### 1. Objective
Design and implement secure Analytics functionality.

### 2. Business Goal
Meet enterprise requirements by providing robust Analytics capabilities.

### 3. Features
Full stack implementation of Analytics, from DB to UI.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-22.01: DB: Models & Migrations for Analytics
- SP-22.02: API: Service Layer logic for Analytics
- SP-22.03: API: Route Controllers for Analytics
- SP-22.04: UI: API Client Hooks & State for Analytics
- SP-22.05: UI: React Components & Validation for Analytics

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
Build RESTful FastAPI endpoints handling Analytics logic.

### 11. Database Tasks
Create or update SQLAlchemy models required for Analytics.

### 12. UI Tasks
Build TanStack Query hooks and React UI for Analytics.

### 13. UX Tasks
Use Loading Skeletons and Toast notifications to ensure a premium feel.

### 14. Security Tasks
Enforce strict RBAC and validate all inputs via Pydantic and Zod.

### 15. Testing Tasks
Ensure 80% minimum coverage for all new services and controllers.

### 16. DevOps Tasks
Validate CI pipeline passes with new dependencies.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 21.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-22.01] DB: Models & Migrations for Analytics

```text
TASK ID: SP-22.01
PHASE / SUB-PHASE: 22 — Analytics & Telemetry Dashboard / 22.01 DB: Models & Migrations for Analytics

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: DB: Models & Migrations for Analytics.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 22.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-22.02] API: Service Layer logic for Analytics

```text
TASK ID: SP-22.02
PHASE / SUB-PHASE: 22 — Analytics & Telemetry Dashboard / 22.02 API: Service Layer logic for Analytics

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Service Layer logic for Analytics.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 22.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-22.03] API: Route Controllers for Analytics

```text
TASK ID: SP-22.03
PHASE / SUB-PHASE: 22 — Analytics & Telemetry Dashboard / 22.03 API: Route Controllers for Analytics

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Route Controllers for Analytics.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 22.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-22.04] UI: API Client Hooks & State for Analytics

```text
TASK ID: SP-22.04
PHASE / SUB-PHASE: 22 — Analytics & Telemetry Dashboard / 22.04 UI: API Client Hooks & State for Analytics

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: API Client Hooks & State for Analytics.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 22.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-22.05] UI: React Components & Validation for Analytics

```text
TASK ID: SP-22.05
PHASE / SUB-PHASE: 22 — Analytics & Telemetry Dashboard / 22.05 UI: React Components & Validation for Analytics

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: React Components & Validation for Analytics.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 22.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 23 — Account Deletion & GDPR

### 1. Objective
Design and implement secure GDPR Deletion functionality.

### 2. Business Goal
Meet enterprise requirements by providing robust GDPR Deletion capabilities.

### 3. Features
Full stack implementation of GDPR Deletion, from DB to UI.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-23.01: DB: Models & Migrations for GDPR Deletion
- SP-23.02: API: Service Layer logic for GDPR Deletion
- SP-23.03: API: Route Controllers for GDPR Deletion
- SP-23.04: UI: API Client Hooks & State for GDPR Deletion
- SP-23.05: UI: React Components & Validation for GDPR Deletion

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
Build RESTful FastAPI endpoints handling GDPR Deletion logic.

### 11. Database Tasks
Create or update SQLAlchemy models required for GDPR Deletion.

### 12. UI Tasks
Build TanStack Query hooks and React UI for GDPR Deletion.

### 13. UX Tasks
Use Loading Skeletons and Toast notifications to ensure a premium feel.

### 14. Security Tasks
Enforce strict RBAC and validate all inputs via Pydantic and Zod.

### 15. Testing Tasks
Ensure 80% minimum coverage for all new services and controllers.

### 16. DevOps Tasks
Validate CI pipeline passes with new dependencies.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 22.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-23.01] DB: Models & Migrations for GDPR Deletion

```text
TASK ID: SP-23.01
PHASE / SUB-PHASE: 23 — Account Deletion & GDPR / 23.01 DB: Models & Migrations for GDPR Deletion

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: DB: Models & Migrations for GDPR Deletion.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 23.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-23.02] API: Service Layer logic for GDPR Deletion

```text
TASK ID: SP-23.02
PHASE / SUB-PHASE: 23 — Account Deletion & GDPR / 23.02 API: Service Layer logic for GDPR Deletion

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Service Layer logic for GDPR Deletion.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 23.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-23.03] API: Route Controllers for GDPR Deletion

```text
TASK ID: SP-23.03
PHASE / SUB-PHASE: 23 — Account Deletion & GDPR / 23.03 API: Route Controllers for GDPR Deletion

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Route Controllers for GDPR Deletion.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 23.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-23.04] UI: API Client Hooks & State for GDPR Deletion

```text
TASK ID: SP-23.04
PHASE / SUB-PHASE: 23 — Account Deletion & GDPR / 23.04 UI: API Client Hooks & State for GDPR Deletion

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: API Client Hooks & State for GDPR Deletion.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 23.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-23.05] UI: React Components & Validation for GDPR Deletion

```text
TASK ID: SP-23.05
PHASE / SUB-PHASE: 23 — Account Deletion & GDPR / 23.05 UI: React Components & Validation for GDPR Deletion

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: React Components & Validation for GDPR Deletion.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 23.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 24 — Security Hardening

### 1. Objective
Design and implement secure Security Hardening functionality.

### 2. Business Goal
Meet enterprise requirements by providing robust Security Hardening capabilities.

### 3. Features
Full stack implementation of Security Hardening, from DB to UI.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-24.01: DB: Models & Migrations for Security Hardening
- SP-24.02: API: Service Layer logic for Security Hardening
- SP-24.03: API: Route Controllers for Security Hardening
- SP-24.04: UI: API Client Hooks & State for Security Hardening
- SP-24.05: UI: React Components & Validation for Security Hardening

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
Build RESTful FastAPI endpoints handling Security Hardening logic.

### 11. Database Tasks
Create or update SQLAlchemy models required for Security Hardening.

### 12. UI Tasks
Build TanStack Query hooks and React UI for Security Hardening.

### 13. UX Tasks
Use Loading Skeletons and Toast notifications to ensure a premium feel.

### 14. Security Tasks
Enforce strict RBAC and validate all inputs via Pydantic and Zod.

### 15. Testing Tasks
Ensure 80% minimum coverage for all new services and controllers.

### 16. DevOps Tasks
Validate CI pipeline passes with new dependencies.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 23.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-24.01] DB: Models & Migrations for Security Hardening

```text
TASK ID: SP-24.01
PHASE / SUB-PHASE: 24 — Security Hardening / 24.01 DB: Models & Migrations for Security Hardening

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: DB: Models & Migrations for Security Hardening.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 24.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-24.02] API: Service Layer logic for Security Hardening

```text
TASK ID: SP-24.02
PHASE / SUB-PHASE: 24 — Security Hardening / 24.02 API: Service Layer logic for Security Hardening

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Service Layer logic for Security Hardening.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 24.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-24.03] API: Route Controllers for Security Hardening

```text
TASK ID: SP-24.03
PHASE / SUB-PHASE: 24 — Security Hardening / 24.03 API: Route Controllers for Security Hardening

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Route Controllers for Security Hardening.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 24.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-24.04] UI: API Client Hooks & State for Security Hardening

```text
TASK ID: SP-24.04
PHASE / SUB-PHASE: 24 — Security Hardening / 24.04 UI: API Client Hooks & State for Security Hardening

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: API Client Hooks & State for Security Hardening.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 24.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-24.05] UI: React Components & Validation for Security Hardening

```text
TASK ID: SP-24.05
PHASE / SUB-PHASE: 24 — Security Hardening / 24.05 UI: React Components & Validation for Security Hardening

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: React Components & Validation for Security Hardening.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 24.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

## Phase 25 — Production Deployment & CI/CD

### 1. Objective
Design and implement secure Production CI/CD functionality.

### 2. Business Goal
Meet enterprise requirements by providing robust Production CI/CD capabilities.

### 3. Features
Full stack implementation of Production CI/CD, from DB to UI.

### 4. Deliverables
Merged PR containing full vertical slice code (DB, API, UI) passing all tests.

### 5. Sub-phases (minimum 5)
- SP-25.01: DB: Models & Migrations for Production CI/CD
- SP-25.02: API: Service Layer logic for Production CI/CD
- SP-25.03: API: Route Controllers for Production CI/CD
- SP-25.04: UI: API Client Hooks & State for Production CI/CD
- SP-25.05: UI: React Components & Validation for Production CI/CD

### 6. Tasks (minimum 5 per sub-phase)
1. Scaffold structure. 2. Write logic. 3. Hook up UI. 4. Write tests. 5. Perform security review.

### 7. Folder Structure
Follow strict separation: `apps/api/domain`, `packages/ui`, `apps/admin/features`.

### 8. Backend Architecture
Use Domain Driven Design. FastAPI Controllers inject Services which inject Repositories.

### 9. Frontend Architecture
Strictly follow: `UI -> Custom Hook -> TanStack Query -> API Client`.

### 10. API Design
Build RESTful FastAPI endpoints handling Production CI/CD logic.

### 11. Database Tasks
Create or update SQLAlchemy models required for Production CI/CD.

### 12. UI Tasks
Build TanStack Query hooks and React UI for Production CI/CD.

### 13. UX Tasks
Use Loading Skeletons and Toast notifications to ensure a premium feel.

### 14. Security Tasks
Enforce strict RBAC and validate all inputs via Pydantic and Zod.

### 15. Testing Tasks
Ensure 80% minimum coverage for all new services and controllers.

### 16. DevOps Tasks
Validate CI pipeline passes with new dependencies.

### 17. Documentation Tasks
Update ADRs if fundamental architecture decisions change.

### 18. Acceptance Criteria
Feature operates end-to-end without errors in staging.

### 19. Success Criteria
Code adheres 100% to Constitution and AI rules.

### 20. Dependencies
Completion of Phase 24.

### 21. Risks
Potential breakage in shared types or database schema conflicts.

### 22. Future Extension
Architecture designed loosely to support microservices isolation later.

---

### Sub-Phase Implementation Prompts

> *Copy and paste these exact prompts to the AI to execute development.*

#### [SP-25.01] DB: Models & Migrations for Production CI/CD

```text
TASK ID: SP-25.01
PHASE / SUB-PHASE: 25 — Production Deployment & CI/CD / 25.01 DB: Models & Migrations for Production CI/CD

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: DB: Models & Migrations for Production CI/CD.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 25.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-25.02] API: Service Layer logic for Production CI/CD

```text
TASK ID: SP-25.02
PHASE / SUB-PHASE: 25 — Production Deployment & CI/CD / 25.02 API: Service Layer logic for Production CI/CD

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Service Layer logic for Production CI/CD.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 25.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-25.03] API: Route Controllers for Production CI/CD

```text
TASK ID: SP-25.03
PHASE / SUB-PHASE: 25 — Production Deployment & CI/CD / 25.03 API: Route Controllers for Production CI/CD

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: API: Route Controllers for Production CI/CD.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 25.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-25.04] UI: API Client Hooks & State for Production CI/CD

```text
TASK ID: SP-25.04
PHASE / SUB-PHASE: 25 — Production Deployment & CI/CD / 25.04 UI: API Client Hooks & State for Production CI/CD

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: API Client Hooks & State for Production CI/CD.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 25.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

#### [SP-25.05] UI: React Components & Validation for Production CI/CD

```text
TASK ID: SP-25.05
PHASE / SUB-PHASE: 25 — Production Deployment & CI/CD / 25.05 UI: React Components & Validation for Production CI/CD

CONTEXT:
You are building a premium Enterprise IAM Platform. Read docs/01_CONSTITUTION.md through docs/13_ARCHITECTURE_DECISION_RECORDS.md. Architecture must strictly follow the UI -> Hook -> TanStack Query -> API Client flow. Never use inline fetch or axios in components.

TASK:
Design and implement the engineering requirements for: UI: React Components & Validation for Production CI/CD.

REQUIREMENTS:
- Write domain-driven FastAPI backend code if applicable.
- Write dumb UI components and smart Custom Hooks if applicable.
- Use Zod for frontend validation and Pydantic for backend validation.
- Observe the security and testing requirements defined in Phase 25.

ACCEPTANCE CRITERIA:
- All changes must compile without TypeScript or MyPy errors.
- Provide a Walkthrough report summarizing the completed integration.
```

