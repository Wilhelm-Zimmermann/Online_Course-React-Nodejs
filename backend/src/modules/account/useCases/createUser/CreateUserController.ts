import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";


export class CreateUserController {

    async handle(req: Request, res: Response): Promise<Response> {
        const createUserUseCase = container.resolve(CreateUserUseCase);
        const { username, email, password } = req.body;

        await createUserUseCase.execute({
            username,
            email,
            password
        });

        return res.status(201).json({ message: "user created" });
    }
}