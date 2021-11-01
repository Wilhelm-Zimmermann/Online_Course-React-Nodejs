import { getRepository, Repository } from "typeorm";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRespository";


export class UsersRepository implements IUsersRepository {

    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User);
    }

    async create({ username, email, password }: CreateUserDTO): Promise<void> {
        const user = this.repository.create({
            username,
            email,
            password
        });

        await this.repository.save(user);
    }

    async findById(id: string): Promise<User> {
        return await this.repository.findOne(id);
    }

    async findByEmail(email: string): Promise<User> {
        return await this.repository.findOne({email});
    }

    async listAll(): Promise<User[]> {
        return await this.repository.find();
    }
}