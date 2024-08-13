import { Request, Response } from "express"

export const list = async (req: Request, res: Response) => {
    const baseLog = '[list()]'

    try {
        console.log(baseLog);
    }catch(error){
        console.error(`${baseLog} ### ERROR ${error}`);
    }
}