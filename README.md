# AI Software Bootstrap

An opinionated, public bootstrap for building software with AI agents without giving up engineering discipline.

The repository is intentionally small. Its value is the **operating system around the code**: issues, specifications, implementation plans, modular/hexagonal boundaries, tests, CI gates, frontier review, deployment guidance, and observability.

## The workflow

```text
Problem
  -> GitHub issue
  -> Requirements / specification
  -> Spec review gate
  -> Implementation plan
  -> Workstream branch or worktree
  -> Implementation
  -> Pull request
  -> CI / merge gates
  -> Frontier review (AI and/or human)
  -> Corrections
  -> Merge / deploy
  -> Observability + feedback
```

**The AI proposes. The repository constrains. The gates verify. A review frontier decides whether the change is ready to cross into the next environment.**

## What is included

- `AGENTS.md`: persistent operating rules for coding agents.
- `ARCHITECTURE.md`: modular + hexagonal dependency rules.
- `specs/`: requirements and behavioral contracts. No implementation plan inside the spec.
- `plans/`: implementation plans created only after the spec is reviewed.
- `.github/`: issue templates, PR template, CI and security workflows.
- `docs/methodology/`: SDD, DDD, hexagonal architecture, testing, Git workflow, review frontier.
- `docs/security/`: secrets-management principles.
- `docs/deployment/`: Vercel, Railway, and self-managed server trade-offs.
- `src/` + `tests/`: a deliberately tiny TypeScript reference module used to prove the gates.

## Tooling contract

This repository uses **pnpm only**.

Requirements:

- Node.js 22+
- Corepack enabled
- pnpm 10.x

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm verify
```

Do not generate or commit `package-lock.json` or `yarn.lock`. CI rejects mixed package-manager lockfiles.

Then read, in order:

1. [`AGENTS.md`](./AGENTS.md)
2. [`ARCHITECTURE.md`](./ARCHITECTURE.md)
3. [`docs/methodology/spec-driven-development.md`](./docs/methodology/spec-driven-development.md)
4. [`docs/github/setup.md`](./docs/github/setup.md)

## Starting a real change

1. Open a feature or bug issue.
2. Create `specs/active/<issue>-<slug>.md` from `specs/TEMPLATE.md`.
3. Review and approve the requirements before planning implementation.
4. Create `plans/active/<issue>-<slug>.md` from `plans/TEMPLATE.md`.
5. Create a workstream branch/worktree such as `workstream/42-task-priority`.
6. Implement with tests.
7. Run `pnpm verify` locally.
8. Open a PR and let CI run.
9. Pass the review frontier: Codex/AI review, human review, or both depending on risk.
10. Correct findings, merge, deploy, and observe.

## Workshop demo

The repository ships with a small `tasks` module. A good live workshop exercise is documented in [`docs/workshop/demo-scenario.md`](./docs/workshop/demo-scenario.md): add priority to tasks without breaking architecture or existing behavior.

## Principles

- Context belongs in the repository, not in a giant prompt.
- Requirements come before implementation plans.
- Domain rules do not depend on frameworks, databases, or HTTP.
- Agents do not waive failing gates.
- Secrets never belong in Git or prompts.
- Review is a boundary, not a ceremony.
- Observability closes the delivery loop.

## License

Apache-2.0. See [`LICENSE`](./LICENSE).
