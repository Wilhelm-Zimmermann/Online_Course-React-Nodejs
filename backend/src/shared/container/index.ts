import { container } from "tsyringe";
import { UsersRepository } from "../../modules/account/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/account/repositories/IUsersRespository";
import { ILessonRepository } from "../../modules/courseLesson/repositories/ILessonsRepository";
import { LessonsRepository } from "../../modules/courseLesson/repositories/implementations/LessonsRepository";
import { IModulesRepository } from "../../modules/courseModule/repositories/IModulesRepository";
import { ModulesRepository } from "../../modules/courseModule/repositories/implementations/ModulesRepository";

container.registerSingleton<IModulesRepository>(
    "ModulesRepository",
    ModulesRepository
);

container.registerSingleton<ILessonRepository>(
    "LessonsRepository",
    LessonsRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)
