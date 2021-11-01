import { Request, Response } from "express";
import { container } from "tsyringe";
import { CountLessonsInModuleUseCase } from "./CountLessonsInModuleUseCase";


export class CountLessonsInModuleController {

    async handle(req: Request, res: Response): Promise<Response> {
        const countLessonInModuleUseCase = container.resolve(CountLessonsInModuleUseCase);
        const { module_id } = req.params;

        const lessons = await countLessonInModuleUseCase.execute(module_id);

        return res.status(200).json(lessons);
    }
}