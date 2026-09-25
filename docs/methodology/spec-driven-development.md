# Spec-driven development

Spec-driven development separates three artifacts that are often incorrectly collapsed into one prompt.

## 1. Issue: why are we doing work?

The issue is the unit of work and coordination. It describes the problem, context, priority, and desired outcome.

## 2. Specification: what must be true?

The spec defines behavior and constraints:

- use cases;
- functional requirements;
- non-functional requirements;
- invariants;
- acceptance criteria;
- non-goals.

The spec should be reviewable by someone who does not care which files will change.

## 3. Implementation plan: how will this repository change?

Only after the spec is reviewed do we inspect the codebase and propose:

- affected modules;
- architecture;
- migration;
- test strategy;
- ordered steps.

## Why this matters with AI

An agent is very good at filling in blanks. That is useful during implementation and dangerous during requirements discovery.

The spec review gate prevents implementation convenience from silently becoming product policy.

## Lifecycle

```text
Issue -> Spec -> Review -> Plan -> Workstream -> PR -> Gates -> Review frontier
```
