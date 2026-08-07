# Setup Tasks

- [x] Create root configuration files (`.prettierrc`, `commitlint.config.js`, root ESLint configs, VSCode configs).
- [x] Configure Turborepo `turbo.json` with correct pipelines (`build`, `lint`, `dev`, `test`).
- [x] Setup GitHub Actions Workflow `.github/workflows/ci.yml`.
- [x] Refactor packages:
  - [x] `packages/ui` (React components, basic Tailwind config).
  - [x] `packages/config` (ESLint presets, base TypeScript config, shared Tailwind config).
  - [x] `packages/api-client` (Fetch/Axios setup for consuming FastAPI).
- [x] Establish testing tools: Vitest in `package.json` for frontend, Pytest in `apps/api/requirements.txt`.
- [x] Dockerfile configurations:
  - [x] Root `docker-compose.yml` for PostgreSQL, Redis, APIs, and Web apps.
  - [x] `Dockerfile` for `apps/api` (FastAPI).
  - [x] `Dockerfile` for Next.js apps (Standalone output configuration).
- [x] Initialize Documentation: `README.md` and `ARCHITECTURE.md`.
