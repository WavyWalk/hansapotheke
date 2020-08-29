import {NextFunction, Request, Response} from "express";

export const globalErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction)=>{
    if (res.headersSent) {
        next(error)
    }
    res.status(500)
    res.render('error', {error})
}