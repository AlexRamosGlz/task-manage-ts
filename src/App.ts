import express from "express";
import cors from "cors";
import { usersRouter } from "./router/Users.Router.ts";

export class App {
    public express: express.Application;
    
    constructor() {
        this.express = express();
        this.Middleware();
        this.Router();
    }

    private Router(): void {    
        this.express.get('/', (req, res) => {
            res.status(200).json({message: 'server running'});
        })

        this.express.use("/users", usersRouter);
    }

    private Middleware(): void {
        this.express.use(express.json());
        this.express.use(cors({
            origin: '*', 
        }))
    }

}

