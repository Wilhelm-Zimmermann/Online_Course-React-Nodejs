import { inject, injectable } from "tsyringe";
import { Module } from "../../entities/Module";
import { IModulesRepository } from "../../repositories/IModulesRepository";

@injectable()
export class ListModulesUseCase {

    constructor(
        @inject("ModulesRepository")
        private modulesRepository: IModulesRepository
    ) { }

    async execute(): Promise<Module[]> {
        const lessons = await this.modulesRepository.listAll();

        return lessons;
    }
}