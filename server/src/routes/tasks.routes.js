import { Router } from 'express';
import {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    toggleTask,
} from '../controllers/tasks.controller.js';
import { validate } from '../middleware/validate.js';
import { createTaskSchema, updateTaskSchema } from '../schemas/task.schema.js';

const taskRouter = Router();

taskRouter.get('/', getAllTasks);
taskRouter.post('/', validate(createTaskSchema, 'body'), createTask);
taskRouter.put('/:id', validate(updateTaskSchema, 'body'), updateTask);
taskRouter.delete('/:id', deleteTask);
taskRouter.patch('/:id/toggle', toggleTask);

export default taskRouter;
