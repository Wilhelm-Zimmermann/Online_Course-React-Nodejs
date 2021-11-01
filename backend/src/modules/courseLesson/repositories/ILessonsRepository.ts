import { CreateLessonDTO } from "../dtos/CreateLessonDTO";
import { UpdateLessonDTO } from "../dtos/UpdateLessonDTO";
import { Lesson } from "../entities/Lesson";


export interface ILessonRepository {
    create(data: CreateLessonDTO): Promise<void>;
    update(data: UpdateLessonDTO): Promise<void>;
    findByName(name: string): Promise<Lesson>;
    findById(id: string): Promise<Lesson>;
    listAll(): Promise<Lesson[]>;
    countLessonsInModule(module_id: string): Promise<number>;
    listAllPerModule(module_id: string): Promise<Lesson[]>;
    delete(id: string): Promise<void>;
}