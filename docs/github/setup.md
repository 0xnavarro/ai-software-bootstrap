# GitHub setup

After creating a project from this bootstrap, configure GitHub repository governance.

## Recommended main-branch rules

Protect `main` and require a pull request before merging.

Require these checks:

- `CI / verify`
- `Security / package-manager-policy`
- `Security / secret-scan` when enabled

Recommended:

- require branches to be up to date before merge;
- block force pushes and branch deletion;
- require conversation resolution;
- use CODEOWNERS for high-risk paths in real organizations.

## GitHub Actions

The included CI runs on GitHub-hosted runners and uses pnpm with a frozen lockfile.

Never expose production secrets to untrusted fork pull requests.

## Merge strategy

For a small project, squash merge is a good default if PRs already contain meaningful internal commits. Choose one policy and document it.
