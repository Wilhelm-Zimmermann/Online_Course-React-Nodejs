import { NextFunction, Request, Response } from "express";
import { AppError } from "../shared/errors/AppError";
import { verify } from "jsonwebtoken";
import secret from "../secrets/secret.json";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const bearerToken = req.headers.authorization;

    if(!bearerToken) {
        throw new AppError("There is no token on header", 401);
    }

    const [, token] = bearerToken.split(" ");
    
    try {
        const {sub} = verify(token, secret.secret) as IPayload;
        req.user = {
            id: sub,
        };
        next();
    }catch {
        throw new AppError("Invalid Token");
    }
}