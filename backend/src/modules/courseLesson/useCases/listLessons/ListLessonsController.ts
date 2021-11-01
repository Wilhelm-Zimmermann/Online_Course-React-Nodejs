import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListLessonsUseCase } from "./ListLessonsUseCase";


export class ListLessonsController {

    async handle(req: Request, res: Response): Promise<Response> {
        const listLessonUseCase = container.resolve(ListLessonsUseCase);

        const lessons = await listLessonUseCase.execute();

        return res.status(200).json(lessons);
    }
}