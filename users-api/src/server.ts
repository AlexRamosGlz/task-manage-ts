import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";

const app: Express = express();

const awsRequestId = (req: Request, res: Response, next: NextFunction) => {

    const baseLog = `[awsRequestId()]`;

    try{
        //@ts-ignore
        req.awsRequestId = req.apiGateway.context.awsRequestId;

        next();
    }catch(error) {
        console.error(`${baseLog} ### ERROR: ${error}`);
    }
    
}

app.use(cors());
app.use(express.json());

app.get('/', [awsRequestId], (req: Request, res: Response) => {

    const baseLog = `[server.ts][healthcheck]`;

    try{
        //@ts-ignore
       res.json({ message: 'Healthcheck OK', reqId: req.awsRequestId }).status(200);
    }catch{
        res.json({ message: 'Healthcheck NOT-OK'}).status(400);
    }
})

export default app;