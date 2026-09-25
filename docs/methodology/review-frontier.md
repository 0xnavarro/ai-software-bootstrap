# Review frontier

A review frontier is the boundary a change must cross before it gains more authority.

Examples:

- local code -> pull request;
- PR -> merge;
- main -> production;
- migration -> destructive execution.

## Reviewers may be different

Depending on risk, the frontier can include:

- Codex/AI code review;
- another specialist agent;
- deterministic security/architecture checks;
- human review;
- domain/security owner approval.

Human review is not required for every trivial change, and AI review is not sufficient for every high-risk change.

## Principle

**Automation can accelerate evidence collection. It must not silently increase authority.**

Resolve material findings before crossing the frontier.
