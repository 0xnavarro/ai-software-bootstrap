export class InMemoryTaskRepository {
  #tasks = new Map();

  async save(task) {
    this.#tasks.set(task.id, task);
  }

  async findById(id) {
    return this.#tasks.get(id) ?? null;
  }
}
