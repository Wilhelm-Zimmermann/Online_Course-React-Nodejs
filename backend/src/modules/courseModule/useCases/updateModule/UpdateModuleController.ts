import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateModuleUseCase } from "./UpdateModuleUseCase";

export class UpdateModuleController {

    async handle(req: Request, res: Response): Promise<Response> {
        const updateModuleUseCase = container.resolve(UpdateModuleUseCase);
        const { id } = req.params;
        const { name } = req.body;

        await updateModuleUseCase.execute({
            id, 
            name
        });

        return res.status(200).json({ msg: "ok" });
    }
}