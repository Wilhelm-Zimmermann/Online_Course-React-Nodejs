import { Request, Response } from "express";
import { container } from "tsyringe";
import { SingleLessonUseCase } from "./SingleLessonUseCase";


export class SingleLessonController {
    async handle(req: Request, res: Response): Promise<Response> {
        const singleLessonUseCase = container.resolve(SingleLessonUseCase);

        const { id } = req.params;

        const lesson = await singleLessonUseCase.execute(id);

        return res.status(200).json(lesson);
    }
}