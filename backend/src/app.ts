import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
import "./shared/container";
import createConnection from "./database";
import { router } from "./routes";
import { AppError } from "./shared/errors/AppError";
import cors from "cors";

createConnection();
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof AppError) {
        return res.status(err.statusCode).json({ error: err.message })
    }

    return res.status(500).json({ error: err.message })
});

export { app };