# Workshop demo scenario

Goal: demonstrate the full workflow without exposing confidential code.

## Starting state

The `tasks` module can create a task with an ID and title.

## Demo request

> Users want to assign a priority to each task. Supported values are low, medium, and high. Existing callers that do not provide a priority must continue to work and should get medium by default.

Do **not** implement this request before the workshop if you want to perform it live.

## Suggested live flow

1. Open a GitHub feature issue.
2. Write a spec from `specs/TEMPLATE.md`.
3. Review the spec with Melanie. Ask whether the requirements are complete.
4. Only then create an implementation plan.
5. Create a workstream branch/worktree.
6. Hand execution to Brida Code.
7. Ask Brida Code to inspect `AGENTS.md`, architecture, spec, and plan before changing code.
8. Let it implement the smallest architecture-consistent change and tests.
9. Run `pnpm verify`.
10. Open a PR.
11. Show GitHub Actions and merge gates.
12. Run a review frontier (Codex Review and/or human review).
13. Correct findings.
14. Merge.
15. Discuss deploy + observability.

## Teaching points

- the issue is not the spec;
- the spec is not the implementation plan;
- the agent receives repository context instead of a giant prompt;
- architecture constrains the implementation;
- gates verify objectively;
- review controls authority;
- production is not the end: observe the result.
