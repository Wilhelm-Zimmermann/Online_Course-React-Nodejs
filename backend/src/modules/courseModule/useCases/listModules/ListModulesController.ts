import { Response, Request } from "express";
import { container } from "tsyringe";
import { ListModulesUseCase } from "./ListModulesUseCase";

export class ListModulesController {
    
    async handle(req: Request, res: Response): Promise<Response> {
        const listModulesUseCase = container.resolve(ListModulesUseCase);

        const modules = await listModulesUseCase.execute();

        return res.status(200).json({modules});
    }
}