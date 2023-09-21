import express, { Router } from "express";

export const usersRouter: express.IRouter = Router();

usersRouter.get("/", (req, res) => {
    res.status(200).json({ message: 'router created'})
})
