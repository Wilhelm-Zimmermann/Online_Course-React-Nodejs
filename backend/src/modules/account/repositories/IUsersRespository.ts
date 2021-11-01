import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { User } from "../entities/User";

export interface IUsersRepository {
    create(data: CreateUserDTO): Promise<void>;
    findById(id: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    listAll(): Promise<User[]>;
}