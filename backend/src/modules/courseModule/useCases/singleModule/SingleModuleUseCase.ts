import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Module } from "../../entities/Module";
import { IModulesRepository } from "../../repositories/IModulesRepository";

@injectable()
export class SingleModuleUseCase {

    constructor(
        @inject("ModulesRepository")
        private modulesRepository: IModulesRepository
    ) { }

    async execute(id: string): Promise<Module> {
        const module = await this.modulesRepository.findById(id);

        if(!module) {
            throw new AppError("There is an error with your id", 404);
        }
        return module;
    }
}