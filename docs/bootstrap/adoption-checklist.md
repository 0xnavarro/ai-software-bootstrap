# Adoption checklist

Use this checklist when starting a new project from the bootstrap.

## 1. Repository

- [ ] Rename the project/package.
- [ ] Decide whether the repository is public or private.
- [ ] Keep pnpm as the only package manager.
- [ ] Enable Corepack for contributors/CI.
- [ ] Keep `pnpm-lock.yaml` committed.

## 2. Product and domain

- [ ] Write the first real GitHub issue.
- [ ] Identify the first domain/module boundary.
- [ ] Replace the sample `tasks` module when it no longer helps.
- [ ] Capture important architecture decisions as ADRs.

## 3. AI operating context

- [ ] Adapt `AGENTS.md` to the project.
- [ ] Document commands agents may run.
- [ ] Document forbidden data/secrets.
- [ ] Keep product requirements out of agent-only instructions.

## 4. GitHub governance

- [ ] Protect `main`.
- [ ] Require pull requests.
- [ ] Require `CI / verify`.
- [ ] Require `Security / package-manager-policy`.
- [ ] Require `Security / secret-scan`.
- [ ] Require conversation resolution.
- [ ] Decide when human/domain/security review is mandatory.

## 5. Delivery

- [ ] Choose environments: local / QA / production.
- [ ] Choose deploy target.
- [ ] Configure secrets outside Git.
- [ ] Define rollback.
- [ ] Define logs, metrics, health checks, and alerts.

## 6. First workstream

```text
Issue
 -> Spec
 -> Spec review
 -> Implementation plan
 -> workstream branch/worktree
 -> implementation + tests
 -> PR
 -> CI gates
 -> review frontier
 -> merge/deploy
 -> observability
```

Do not skip the spec review gate just because an agent can start coding immediately.
