import { StatusCodes } from 'http-status-codes';

export function validate(schema, source = 'body') {
    return (req, res, next) => {
        const result = schema.safeParse(req[source]);
        if (!result.success) {
            const errors = result.error.issues.map(i => ({
                path: i.path.join('.'),
                message: i.message,
            }));
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: 'Validation error',
                errors,
            });
        }
        req[source] = result.data;
        next();
    };
}
