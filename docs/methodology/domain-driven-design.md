# Domain-driven design

DDD is used here pragmatically.

## Model the business language

Prefer explicit concepts over primitive strings and booleans when the concept carries rules.

For example, a task priority is not merely any string. It has a bounded vocabulary and can own validation/default behavior.

## Module boundaries

A module should correspond to a coherent business capability.

Inside a module:

- domain owns business meaning;
- application owns use-case orchestration;
- ports define outside capabilities;
- adapters implement those capabilities.

## Ubiquitous language

Use the same terms in:

- specs;
- issues;
- code;
- tests;
- UI/API contracts.

If the same word means different things to different people, stop and clarify before encoding it.
