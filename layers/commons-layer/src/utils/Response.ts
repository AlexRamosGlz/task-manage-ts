import { Response } from "express";
import { errorStatusCode, successStatusCode } from "./Types/StatusCode";

/**
 * 
 * @param res 
 * @param folio 
 * @param content 
 * @param message 
 * @param statusCode 
 * @returns 
 */
export const success = (res: Response, folio: String, content: Object, message: String, statusCode: successStatusCode = 200) => {

    const response = {
        folio,
        content,
        message
    }

    return res.status(statusCode).json(response);
}

/**
 * 
 * @param res 
 * @param folio 
 * @param content 
 * @param message 
 * @param statusCode 
 * @returns 
 */
export const error = (res: Response, folio: String, content: Object, message: String, statusCode: errorStatusCode = 400) => {

    const response = {
        folio,
        content,
        message
    }

    return res.status(statusCode).json(response);
}