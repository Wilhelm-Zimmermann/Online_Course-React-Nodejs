import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IModulesRepository } from "../../../courseModule/repositories/IModulesRepository";
import { Lesson } from "../../entities/Lesson";
import { ILessonRepository } from "../../repositories/ILessonsRepository";


@injectable()
export class CountLessonsInModuleUseCase {

    constructor(
        @inject("LessonsRepository")
        private lessonsRepository: ILessonRepository,
        @inject("ModulesRepository")
        private modulesRepository: IModulesRepository
    ) { }

    async execute(module_id: string): Promise<number> {
        const moduleExists = await this.modulesRepository.findById(module_id);

        if(!moduleExists) {
            throw new AppError("This module does not exists", 404);
        }

        const lessons = await this.lessonsRepository.countLessonsInModule(module_id);

        return lessons;
    }   
}