# Testing strategy

Tests are executable evidence, not decoration.

## Layers

### Domain tests

Fast tests for invariants and domain behavior.

### Application tests

Exercise use cases through ports with in-memory/fake adapters.

### Integration tests

Verify concrete infrastructure boundaries when the project adds them.

### End-to-end tests

Reserve for the most important user journeys; do not replace lower-level tests with E2E alone.

### Architecture tests

Verify dependency rules that ordinary behavior tests cannot see.

## Regression rule

A bug fix should normally include a test that fails before the fix and passes after it.

## Completion

An agent must not declare work complete because code "looks right". Required gates must execute.
