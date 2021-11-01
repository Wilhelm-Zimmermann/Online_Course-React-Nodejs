import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Lesson } from "../../entities/Lesson";
import { ILessonRepository } from "../../repositories/ILessonsRepository";


@injectable()
export class SingleLessonUseCase {

    constructor(
        @inject("LessonsRepository")
        private lessonsRepository: ILessonRepository
    ) { }

    async execute(id: string): Promise<Lesson> {
        const lesson = await this.lessonsRepository.findById(id);

        if(!lesson) {
            throw new AppError("No lesson found");
        }

        return lesson;
    }
}