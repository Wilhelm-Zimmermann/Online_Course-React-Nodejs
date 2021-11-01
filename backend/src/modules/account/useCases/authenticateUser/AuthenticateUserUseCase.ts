import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { LoginUserDTO } from "../../dtos/LoginUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRespository";
import secret  from "../../../../secrets/secret.json";

interface IResponse {
    user: {
        admin: boolean;
        token: string;
        email: string;
    }
}

@injectable()
export class AuthenticateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ email, password }: LoginUserDTO): Promise<IResponse> {
        const userExists = await this.usersRepository.findByEmail(email);

        if(!userExists) {
            throw new AppError("Email or Password might be invalid");
        }
        
        const passwordMatch = compare(password, userExists.password);

        if(!passwordMatch) {
            throw new AppError("Email or Password might be invalid");
        }

        const token = sign({}, secret.secret,
        {
            subject: userExists.id,
            expiresIn: secret.expiresIn
        });

        return {
            user:{
                admin: userExists.is_admin,
                token,
                email: userExists.email
            }
        };
    }
}