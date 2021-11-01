import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { CreateModuleDTO } from "../../dtos/CreateModuleDTO";
import { IModulesRepository } from "../../repositories/IModulesRepository";



@injectable()
export class UpdateModuleUseCase {
    
    constructor(
        @inject("ModulesRepository")
        private modulesRepository: IModulesRepository
    ) { }

    async execute({ id, name }: CreateModuleDTO): Promise<void> {
        const moduleExists = await this.modulesRepository.findById(id);
        const nameExists = await this.modulesRepository.findByName(name);

        if(!moduleExists) {
            throw new AppError("Module can not be found", 404);
        }

        if(nameExists) {
            if(nameExists.id != id)
                throw new AppError("Can not register modules with the same name");
        }

        await this.modulesRepository.create({
            id,
            name
        });
    }
}