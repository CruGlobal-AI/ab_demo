# AGENTS.md

Notes for AI coding agents working in `ab_demo`.

- A small demo of the **CruGlobal-AI** AppBuilder stack (fork of `achoobert/ab_demo`). Start from `CruGlobal-AI/ab_runtime` and `CruGlobal-AI/ab-cli` for the big picture.
- It boots the stack with plain `docker compose` (`docker-compose.yml`), not ab-cli or Docker Swarm. `UP.sh` (swarm/podman) and the Electron files (`main.js`, `index.html`) are older experiments.
- Images come from `${AB_IMAGE_REGISTRY:-ghcr.io/cruglobal-ai}`. Tags are the `AB_*_VERSION` values in `.env` (copy `.env.example`). Never point back at upstream orgs or Docker Hub `digiserve/*` by default.
- `docker compose up -d` runs the `migration` service first (ab-migration-manager applies DB schema patches, then exits). The other services wait for it, and it waits for the `db` healthcheck. The migration image is amd64 only, so it runs under emulation on Apple Silicon.
- Boot and test:
  1. `cp .env.example .env && docker compose up -d`
  2. `npm ci`
  3. `npm run setup_definitions` (imports the Movies app from `defs/`)
  4. `npm run test:ci` (Cypress, specs in `test/cypress/e2e/`)
- CI (`.github/workflows/run.yml`) runs the same steps. It needs no secrets and deploys nothing.
