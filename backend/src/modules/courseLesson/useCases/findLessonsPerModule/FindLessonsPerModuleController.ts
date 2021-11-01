import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindLessonsPerModuleUseCase } from "./FindLessonsPerModuleUseCase";

export class FindLessonsPerModuleController {

    async handle(req: Request, res: Response): Promise<Response> {
        const findLessonsPerModuleUseCase = container.resolve(FindLessonsPerModuleUseCase);
        const { module_id } = req.params;

        const lessons = await findLessonsPerModuleUseCase.execute(module_id);

        return res.status(200).json(lessons);
    }
}