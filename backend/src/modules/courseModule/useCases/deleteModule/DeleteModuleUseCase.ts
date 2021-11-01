import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IModulesRepository } from "../../repositories/IModulesRepository";

@injectable()
export class DeleteModuleUseCase {

    constructor(
        @inject("ModulesRepository")
        private modulesRepository: IModulesRepository
    ) { }

    async execute(id: string):Promise<void> {
        const moduleExists = await this.modulesRepository.findById(id);

        if(!moduleExists) {
            throw new AppError("No module found", 404);
        }

        await this.modulesRepository.delete(id);
    }
}