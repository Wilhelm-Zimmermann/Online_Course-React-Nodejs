import { CreateModuleDTO } from "../dtos/CreateModuleDTO";
import { Module } from "../entities/Module";


export interface IModulesRepository {
    create(data: CreateModuleDTO): Promise<void>;
    findByName(name: string): Promise<Module>;
    findById(id: string): Promise<Module>;
    listAll(): Promise<Module[]>;
    delete(id: string): Promise<void>;
}