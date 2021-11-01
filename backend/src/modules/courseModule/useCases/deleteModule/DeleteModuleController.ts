import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteModuleUseCase } from "./DeleteModuleUseCase";

export class DeleteModuleController {

    async handle(req: Request, res: Response): Promise<Response> {
        const deleteModuleUseCase = container.resolve(DeleteModuleUseCase);

        const { id } = req.params;

        await deleteModuleUseCase.execute(id);

        return res.status(200).json({ msg : "deleted" });
    }
}