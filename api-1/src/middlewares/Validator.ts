import type {Request, Response, NextFunction } from "express";
import {ZodError, ZodObject} from "zod";

const bodyValidator = (schema: ZodObject) => {
    return async(req:Request, res:Response, next:NextFunction) => {
        try{
         const data = req.body;
         req.body = await schema.parseAsync(data);
         next()
        }catch(exception) {
            if(exception instanceof ZodError){
                let errBag: Record<string, string> = {}
                exception.issues.map((error) => {
                    const field = error.path.pop() as string;
                    errBag[field] = error.message
                })
                next({code: 400, message: "Validation Failed", details: errBag})
            }else{
                next(exception);
            }
        }
    }
}

export default bodyValidator;