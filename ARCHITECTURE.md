# Architecture

The reference implementation uses **modular + hexagonal architecture** with lightweight DDD.

## Dependency rule

```text
adapters  ---> application ---> domain
   |             |
   +----------> ports
```

Dependencies point inward.

### Domain

Contains business concepts, invariants, value objects, and domain behavior.

It must not import:

- HTTP/framework code;
- databases or persistence SDKs;
- filesystem/network clients;
- application orchestration;
- adapters.

### Application

Contains use cases and orchestration.

It may depend on:

- domain;
- ports/interfaces.

It must not depend directly on concrete adapters.

### Ports

Describe capabilities the application needs from the outside world.

### Adapters

Implement ports using concrete technology.

Examples: PostgreSQL, REST, queues, email, external APIs.

## Modules

Each business capability lives under `src/modules/<module>/` and owns its domain/application/ports/adapters.

Avoid a global service layer that mixes unrelated domains.

## Cross-module communication

Prefer explicit application contracts/events. Do not reach into another module's internals.

## Architecture tests

`pnpm test:architecture` enforces a minimal version of these rules. In a real project, expand the checker as the architecture grows.

## ADRs

Architecturally significant decisions belong in `docs/adr/` with context, decision, alternatives, and consequences.
