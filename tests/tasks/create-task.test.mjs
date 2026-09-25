import test from "node:test";
import assert from "node:assert/strict";
import { createTask } from "../../src/modules/tasks/application/create-task.mjs";
import { InMemoryTaskRepository } from "../../src/modules/tasks/adapters/in-memory-task-repository.mjs";

test("createTask persists and returns a task", async () => {
  const repository = new InMemoryTaskRepository();
  const execute = createTask({
    repository,
    idGenerator: () => "task-1",
  });

  const created = await execute({ title: "Prepare workshop" });
  const stored = await repository.findById("task-1");

  assert.equal(created.id, "task-1");
  assert.equal(stored.title, "Prepare workshop");
});
