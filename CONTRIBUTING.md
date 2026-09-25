# Contributing

## Before coding

Every non-trivial change starts with a GitHub issue.

Features and meaningful behavior changes require:

1. issue;
2. specification;
3. specification review;
4. implementation plan;
5. workstream branch/worktree;
6. implementation + tests;
7. pull request;
8. CI + review frontier.

Small typo/docs-only changes may skip the spec/plan when the PR clearly explains why.

## Branches

Use short-lived workstream branches:

```text
workstream/<issue>-<slug>
fix/<issue>-<slug>
docs/<issue>-<slug>
```

## Commits

Prefer small atomic commits using conventional intent:

```text
feat(tasks): add priority value object
test(tasks): cover default priority
docs(sdd): clarify spec review gate
```

## Local verification

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm verify
```

Do not use npm or Yarn in this repository.

## Pull requests

A PR must:

- link the issue;
- link the approved spec and plan when applicable;
- explain scope and non-goals;
- list verification performed;
- disclose risks or migration impact;
- pass required checks;
- pass the review frontier.
