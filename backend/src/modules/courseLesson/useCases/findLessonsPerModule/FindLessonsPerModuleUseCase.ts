import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IModulesRepository } from "../../../courseModule/repositories/IModulesRepository";
import { Lesson } from "../../entities/Lesson";
import { ILessonRepository } from "../../repositories/ILessonsRepository";

@injectable()
export class FindLessonsPerModuleUseCase {

    constructor(
        @inject("LessonsRepository")
        private lessonsRepository: ILessonRepository,
        @inject("ModulesRepository")
        private modulesRepository: IModulesRepository
    ) { }

    async execute(module_id: string): Promise<Lesson[]> {
        const moduleExists = await this.modulesRepository.findById(module_id);

        if(!moduleExists) {
            throw new AppError("No module found", 404);
        }

        const lessons = await this.lessonsRepository.listAllPerModule(module_id);

        return lessons;
    }
}