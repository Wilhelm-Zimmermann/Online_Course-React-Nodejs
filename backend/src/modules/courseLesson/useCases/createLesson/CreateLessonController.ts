import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateLessonUseCase } from "./CreateLessonUseCase";


export class CreateLessonController {
    async handle(req: Request, res: Response): Promise<Response> {
        const createLessonUseCase = container.resolve(CreateLessonUseCase);
        const { name, module_id, event_date, id } = req.body;

        await createLessonUseCase.execute({
            name,
            module_id,
            event_date,
            id
        });

        return res.status(201).json({ message: "ok" });
    }
}