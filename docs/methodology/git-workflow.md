# Git workflow

## Workstreams

Each non-trivial issue gets an isolated branch or worktree.

Examples:

```bash
git switch -c workstream/42-task-priority
# or
git worktree add ../ws-42 -b workstream/42-task-priority
```

Isolation lets multiple humans/agents work concurrently without mixing unreviewed changes.

## Atomic commits

A commit should represent one coherent reason for change.

## Pull request

The PR is the integration boundary. It connects:

- issue;
- spec;
- plan;
- diff;
- tests;
- automated gates;
- review.

## Merge

Prefer squash or rebase according to project governance, but never merge while required gates or material findings remain unresolved.
