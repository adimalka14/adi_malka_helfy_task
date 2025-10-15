import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { NODE_ENV } from "../config/env.config.js";

export function notFound(_req, res) {
    res.status(StatusCodes.NOT_FOUND).json({ message: ReasonPhrases.NOT_FOUND });
}

export function errorHandler(err, _req, res, _next) {
    const status = err.status ?? StatusCodes.INTERNAL_SERVER_ERROR;

    const payload = {
        message: err.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    };

    if (NODE_ENV !== 'production') {
        payload.stack = err.stack;
    }

    res.status(status).json(payload);
}
