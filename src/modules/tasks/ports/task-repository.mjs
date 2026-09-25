/**
 * Port documentation for task persistence.
 *
 * Implementations must expose:
 * - save(task): Promise<void>
 * - findById(id): Promise<Task | null>
 *
 * JavaScript does not require a runtime interface; the application depends on
 * this behavioral contract rather than a concrete adapter.
 */
export const TASK_REPOSITORY_PORT = Symbol("TaskRepository");
