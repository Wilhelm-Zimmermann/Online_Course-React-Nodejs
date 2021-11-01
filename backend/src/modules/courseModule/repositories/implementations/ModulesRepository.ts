import { getRepository, Repository } from "typeorm";
import { CreateModuleDTO } from "../../dtos/CreateModuleDTO";
import { Module } from "../../entities/Module";
import { IModulesRepository } from "../IModulesRepository";


export class ModulesRepository implements IModulesRepository {

    private repository: Repository<Module>;

    constructor() {
        this.repository = getRepository(Module);
    }

    async create({ id, name }: CreateModuleDTO): Promise<void> {
        const module = this.repository.create({
            id,
            name
        });

        await this.repository.save(module);
    }

    async findByName(name: string): Promise<Module> {
        return await this.repository.findOne({
            name
        });
    }

    async findById(id: string): Promise<Module> {
        return await this.repository.findOne(id);
    }

    async listAll(): Promise<Module[]> {
        return await this.repository.find({
            order: {
                name: "ASC"
            }
        });
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}