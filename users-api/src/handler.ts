import app from "./server";
import ServerlessHttp, { Handler } from "serverless-http";

const sls = ServerlessHttp(app);

export const handler: Handler = async (event, context) => {
    //@ts-ignore
    console.log(`### ${event.requestContext?.http?.method} ${event.requestContext?.http?.path}`);

    return sls(event, context);
}