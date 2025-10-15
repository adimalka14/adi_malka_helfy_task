import { z } from 'zod';

export const priorityEnum = z.enum(['low', 'medium', 'high']);

export const createTaskSchema = z.object({
    title: z.string().trim().min(1, 'title is required'),
    description: z.string().trim().optional().default(''),
    priority: priorityEnum,
});

export const updateTaskSchema = z.object({
    title: z.string().trim().min(1).optional(),
    description: z.string().trim().optional(),
    priority: priorityEnum.optional(),
    completed: z.boolean().optional(),
}).strict();
