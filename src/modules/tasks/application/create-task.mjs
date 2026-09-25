import { Task } from "../domain/task.mjs";

export function createTask({ repository, idGenerator }) {
  if (!repository?.save) {
    throw new TypeError("repository.save is required");
  }

  if (typeof idGenerator !== "function") {
    throw new TypeError("idGenerator is required");
  }

  return async function execute({ title }) {
    const task = new Task({ id: idGenerator(), title });
    await repository.save(task);
    return task;
  };
}
