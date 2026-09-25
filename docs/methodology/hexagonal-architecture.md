# Hexagonal architecture

Hexagonal architecture keeps business logic independent from delivery and infrastructure choices.

```text
HTTP/UI/CLI -> adapters -> application -> domain
DB/APIs     -> adapters -> ports ------^
```

## Rule

The inside must not know which framework, database, queue, or hosting provider exists outside.

This improves:

- testability;
- replacement of infrastructure;
- agent comprehension;
- local reasoning;
- long-term maintainability.

The repository includes a small architecture checker. Real systems should strengthen it as the module graph grows.
