import { NextFunction, Request, Response } from "express";
import { UsersRepository } from "../modules/account/repositories/implementations/UsersRepository";
import { AppError } from "../shared/errors/AppError";


export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
    const { id } = req.user;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(id);

    if(user.is_admin) {
        next();
    }else{
        throw new AppError("Admin previlegies required");
    }
}