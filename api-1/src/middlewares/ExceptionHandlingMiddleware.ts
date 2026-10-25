import type { NextFunction, Request, Response } from "express";

const ExceptionHandlingMiddleware = (error:any, req:Request, res:Response, next:NextFunction) => {
    let code = error.code || 500;
    let detail = error.details || error.detail || null;
    let message = error.message || "Application error..."

    res.status(code).json({
        error: detail,
        message: message,
        status: false
    })
}

export default ExceptionHandlingMiddleware;