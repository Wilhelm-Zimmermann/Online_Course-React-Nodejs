import { inject, injectable } from "tsyringe";
import { Lesson } from "../../entities/Lesson";
import { ILessonRepository } from "../../repositories/ILessonsRepository";

@injectable()
export class ListLessonsUseCase {

    constructor(
        @inject("LessonsRepository")
        private lessonsRepository: ILessonRepository
    ) { }
    
    async execute(): Promise<Lesson[]> {
        const lessons = await this.lessonsRepository.listAll();

        return lessons;
    }
}