import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ILessonRepository } from "../../repositories/ILessonsRepository";

@injectable()
export class DeleteLessonUseCase {

    constructor(
        @inject("LessonsRepository")
        private lessonsRepository: ILessonRepository
    ) { }

    async execute(id: string): Promise<void> {
        const lessonExists = await this.lessonsRepository.findById(id);

        if(!lessonExists) {
            throw new AppError("Lesson not found", 404);
        }

        await this.lessonsRepository.delete(id);
    }
}