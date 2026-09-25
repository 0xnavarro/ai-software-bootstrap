export class Task {
  constructor({ id, title }) {
    if (!id || typeof id !== "string") {
      throw new TypeError("Task id is required");
    }

    if (!title || typeof title !== "string") {
      throw new TypeError("Task title is required");
    }

    this.id = id;
    this.title = title.trim();
  }
}
