import { Router } from 'express';
import taskRouter from './tasks.routes.js';

const apiRouter = Router();

apiRouter.use('/tasks', taskRouter);

export default apiRouter;
