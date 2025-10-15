import { v4 as uuid } from 'uuid';
import { StatusCodes } from 'http-status-codes';

const tasks = [];

export function findAll() {
    return tasks;
}

export function create({ title, description = '', priority }) {
    if (!title) {
        const err = new Error('Title is required');
        err.status = StatusCodes.BAD_REQUEST;
        throw err;
    }
    const task = {
        id: uuid(),
        title: String(title).trim(),
        description: String(description).trim(),
        completed: false,
        createdAt: new Date().toISOString(),
        priority,
    };
    tasks.push(task);
    return task;
}

export function update(id, data) {
    const i = tasks.findIndex(t => t.id === id);
    if (i === -1) {
        const err = new Error('Task not found');
        err.status = StatusCodes.NOT_FOUND;
        throw err;
    }

    const t = tasks[i];
    tasks[i] = {
        ...t,
        ...(data.title !== undefined ? { title: String(data.title).trim() } : {}),
        ...(data.description !== undefined ? { description: String(data.description).trim() } : {}),
        ...(data.priority !== undefined ? { priority: data.priority } : {}),
        ...(data.completed !== undefined ? { completed: Boolean(data.completed) } : {}),
    };
    return tasks[i];
}

export function remove(id) {
    const i = tasks.findIndex(t => t.id === id);
    if (i === -1) {
        const err = new Error('Task not found');
        err.status = StatusCodes.NOT_FOUND;
        throw err;
    }
    tasks.splice(i, 1);
}

export function toggle(id) {
    const t = tasks.find(x => x.id === id);
    if (!t) {
        const err = new Error('Task not found');
        err.status = StatusCodes.NOT_FOUND;
        throw err;
    }
    t.completed = !t.completed;
    return t;
}
