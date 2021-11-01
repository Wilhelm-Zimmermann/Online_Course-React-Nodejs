import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteLessonUseCase } from "./DeleteLessonUseCase";

export class DeleteLessonController {
    async handle(req: Request, res: Response): Promise<Response> {
        const deleteLessonUseCase = container.resolve(DeleteLessonUseCase);

        const { id } = req.params;

        await deleteLessonUseCase.execute(id);

        return res.status(200).json({ msg: "deleted" });
    }
}