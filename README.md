# Hono on Cloudflare Workers

An example app for [The Hollow](https://github.com/PatchFarm/the-hollow), whose pipeline was generated with `npx the-hollow init`. It is also where The Hollow is tested end to end on a real host.

**Deploys to:** Cloudflare Workers. Staging is an uploaded version of the Worker, and a release deploys that exact version.

## The pipeline

Everything in `.github/` and `docs/PIPELINE.md` is generated from [`hollow.yml`](hollow.yml). To change the pipeline, edit `hollow.yml` and run `npx the-hollow upgrade`.

- **Pull requests:** lint, type check, tests, build, and security scans (Gitleaks, OSV-Scanner, CodeQL).
- **Every merge to main:** deploys to staging, then checks it.
- **Every release:** release-please opens a release pull request. Merging it promotes the same build to production after approval, and rolls back if the health check fails.

[docs/PIPELINE.md](docs/PIPELINE.md) describes each workflow in detail.

## Run it locally

```bash
corepack enable
yarn install
yarn dev
```

Checks: `yarn lint`, `yarn typecheck`, `yarn test`.

## Use it for your own app

Copy the app, or run `npx the-hollow init` in your own project. `npx the-hollow secrets` lists the secrets and variables your host needs.

## License

Apache-2.0. See [LICENSE](LICENSE) and [NOTICE](NOTICE).
