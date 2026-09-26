# Retention Intervention Planner with Next.js

A Next.js application and route handler that turn account signals into explainable customer-success interventions.

## Architecture and patterns

The Retention Planning bounded context models usage and support signals independently of React and Next.js. Visitor supports risk scoring today and future audit/metrics projections. `PlanIntervention` is the use case; the server component and route handler are delivery adapters. This example demonstrates decision support, not an autonomous customer action.

```bash
npm ci
npm test
npm run lint
npm run build
```

`POST /api/interventions` accepts `accountId`, `usageDropPercent`, and `openSupportCases`.

See [architecture](docs/architecture.md), [API documentation](docs/api.md), and [ADR-001](docs/adr/001-explainable-signals.md).
