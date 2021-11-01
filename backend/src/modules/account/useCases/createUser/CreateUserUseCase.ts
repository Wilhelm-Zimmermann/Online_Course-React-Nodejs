import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRespository";
import { hash } from "bcrypt";


@injectable()
export class CreateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ email, password, username }: CreateUserDTO): Promise<void> {
        const emailAlreadyInUse = await this.usersRepository.findByEmail(email);

        const passwordEncrypted = await hash(password, 8);

        password = passwordEncrypted;

        if(emailAlreadyInUse) {
            throw new AppError("This email is already in use");
        }

        await this.usersRepository.create({
            username,
            email,
            password
        });
    }
}