import { Request, Response } from "express";
import { container } from "tsyringe";
import { SingleModuleUseCase } from "./SingleModuleUseCase";


export class SingleModuleController {
    async handle(req: Request, res: Response): Promise<Response> {
        const singleModuleUseCase = container.resolve(SingleModuleUseCase);
        const { id } = req.params;

        const module = await singleModuleUseCase.execute(id);

        return res.status(200).json(module);
    }
}