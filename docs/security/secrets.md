# Secrets management

Secrets are runtime configuration, never source code.

## Local development

Use a local `.env` ignored by Git. Commit only `.env.example` with placeholders.

## Managed platforms

Vercel, Railway, GitHub Actions, and most cloud providers expose encrypted environment/secret stores. Use those instead of files in the repository.

## Self-managed servers

Use restricted environment files, systemd credentials, container secrets, or a dedicated secrets manager. Apply least privilege and rotate credentials.

## Dedicated secrets managers

Examples include Infisical, 1Password Secrets Automation, HashiCorp Vault, and cloud-native secret managers. Choose based on threat model and operational complexity.

## Rules

- do not paste secrets into AI prompts;
- scope credentials to the smallest environment/action;
- separate development, staging, and production;
- rotate exposed secrets;
- audit access.
