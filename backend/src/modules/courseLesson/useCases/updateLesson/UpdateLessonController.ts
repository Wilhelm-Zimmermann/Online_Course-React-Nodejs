import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateLessonUseCase } from "./UpdateLessonUseCase";


export class UpdateLessonController {

    async handle(req: Request, res: Response): Promise<Response> {
        const updateLessonUseCase = container.resolve(UpdateLessonUseCase);
        const { name, event_date } = req.body;
        const { id } = req.params;

        await updateLessonUseCase.execute({
            id,
            name,
            event_date
        });

        return res.status(200).json({ msg: "ok" });
    }
}