import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { CreateModuleDTO } from "../../dtos/CreateModuleDTO";
import { IModulesRepository } from "../../repositories/IModulesRepository";

@injectable()
export class CreateModuleUseCase {

    constructor(
        @inject("ModulesRepository")
        private modulesRepository: IModulesRepository
    ) { }

    async execute({ name }: CreateModuleDTO): Promise<void> {
        const moduleExists = await this.modulesRepository.findByName(name);

        if(moduleExists){
            throw new AppError("Cannot register a module with the same name");
        }

        await this.modulesRepository.create({ name });
    }
}