import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IModulesRepository } from "../../../courseModule/repositories/IModulesRepository";
import { CreateLessonDTO } from "../../dtos/CreateLessonDTO";
import { ILessonRepository } from "../../repositories/ILessonsRepository";


@injectable()
export class CreateLessonUseCase {

    constructor(
        @inject("LessonsRepository")
        private lessonsRepository: ILessonRepository,
        @inject("ModulesRepository")
        private modulesRepository: IModulesRepository
    ) { }

    async execute(data: CreateLessonDTO): Promise<void> {
        const moduleExists = await this.modulesRepository.findById(data.module_id);
        const lessonExists = await this.lessonsRepository.findByName(data.name);

        const eventDate = new Date(data.event_date).getTime();
        const now = new Date().getTime();

        if(eventDate < now) {
            throw new AppError("Event date must be at least one day in future (24 hours later)");
        }

        if(lessonExists) {
            throw new AppError("Can't have lessons with the same name");
        }

        if(!moduleExists) {
            throw new AppError("This module does not exists", 400);
        }

        await this.lessonsRepository.create(data);
    }
}