import test from "node:test";
import assert from "node:assert/strict";
import { Task } from "../../src/modules/tasks/domain/task.mjs";

test("Task requires an id", () => {
  assert.throws(
    () => new Task({ id: "", title: "Ship workshop" }),
    /id is required/,
  );
});

test("Task trims its title", () => {
  const task = new Task({ id: "task-1", title: "  Ship workshop  " });
  assert.equal(task.title, "Ship workshop");
});
