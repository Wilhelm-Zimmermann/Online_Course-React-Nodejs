import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateModuleUseCase } from "./CreateModuleUseCase";


export class CreateModuleController {
    async handle(req: Request, res: Response): Promise<Response> {
        const createModuleUseCase = container.resolve(CreateModuleUseCase);
        const { name } = req.body;
        
        await createModuleUseCase.execute({ name });

        return res.status(201).json({ message: "ok" });
    }
}