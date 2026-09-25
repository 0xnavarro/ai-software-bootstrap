# Deployment options

There is no single best deployment target. Choose based on control, complexity, and product needs.

## Vercel

Good fit for web frontends and supported full-stack frameworks.

Strengths:
- very low deployment friction;
- preview deployments;
- managed TLS/CDN;
- environment variables.

Trade-off: less infrastructure control.

## Railway

Good fit for small services, workers, and databases when you want a managed developer experience.

Strengths:
- simple service/database provisioning;
- environment management;
- logs and deploy history.

Trade-off: more platform coupling than a generic VM.

## Self-managed server / VM

Good fit when you need maximum control or custom infrastructure.

You must own SSH access/key policy, firewalling, patching, hardening, process/container management, TLS, backups, monitoring, secret distribution, and incident response.

Do not choose a VM merely because it looks cheaper on the invoice; include operational cost.

## Regardless of target

A production deploy needs secrets, logs, health checks, rollback strategy, backups for stateful services, and alerting for material failures.
