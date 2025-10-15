import { StatusCodes } from 'http-status-codes';
import * as TaskService from '../services/tasks.service.js';

export function getAllTasks(_req, res, next) {
    try {
        const list = TaskService.findAll();
        res.status(StatusCodes.OK).json(list);
    } catch (err) {
        next(err);
    }
}

export function createTask(req, res, next) {
    try {
        const { title, description, priority } = req.body;
        const created = TaskService.create({ title, description, priority });
        res.status(StatusCodes.CREATED).json(created);
    } catch (err) {
        next(err);
    }
}

export function updateTask(req, res, next) {
    try {
        const { id } = req.params;
        const { title, description, priority, completed } = req.body;
        const updated = TaskService.update(id, { title, description, priority, completed });
        if (!updated) return res.status(StatusCodes.NOT_FOUND).json({ message: 'Task not found' });
        res.status(StatusCodes.OK).json(updated);
    } catch (err) {
        next(err);
    }
}

export function deleteTask(req, res, next) {
    try {
        const { id } = req.params;
        TaskService.remove(id);
        res.status(StatusCodes.NO_CONTENT).json({'message': 'Task deleted'});
    } catch (err) {
        next(err);
    }
}

export function toggleTask(req, res, next) {
    try {
        const { id } = req.params;
        const t = TaskService.toggle(id);
        if (!t) return res.status(StatusCodes.NOT_FOUND).json({ message: 'Task not found' });
        res.status(StatusCodes.OK).json(t);
    } catch (err) {
        next(err);
    }
}
