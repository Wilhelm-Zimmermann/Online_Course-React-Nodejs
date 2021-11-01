import { getRepository, Repository } from "typeorm";
import { CreateLessonDTO } from "../../dtos/CreateLessonDTO";
import { UpdateLessonDTO } from "../../dtos/UpdateLessonDTO";
import { Lesson } from "../../entities/Lesson";
import { ILessonRepository } from "../ILessonsRepository";


export class LessonsRepository implements ILessonRepository {

    private repository: Repository<Lesson>;

    constructor() {
        this.repository = getRepository(Lesson);
    }
    
    async create({ id, name, module_id, event_date }: CreateLessonDTO): Promise<void> {
        const lesson = this.repository.create({
            id,
            name,
            module_id,
            event_date: new Date(event_date).toISOString()
        });
        
        await this.repository.save(lesson);
    }

    async update({ id, event_date, name }: UpdateLessonDTO): Promise<void> {
        const lesson = this.repository.create({
            id,
            name,
            event_date: new Date(event_date).toISOString()
        });
        
        await this.repository.save(lesson);
    }
    
    async findByName(name: string): Promise<Lesson> {
        return await this.repository.findOne({ name });
    }
    
    async findById(id: string): Promise<Lesson> {
        return await this.repository.findOne(id);
    }
    
    async listAll(): Promise<Lesson[]> {
        return await this.repository.query("SELECT * FROM lessons ORDER BY name");
    }

    async listAllPerModule(module_id: string): Promise<Lesson[]> {
        return await this.repository.query(`SELECT * FROM lessons WHERE module_id = '${module_id}' ORDER BY lessons.name ASC`)
    }

    async countLessonsInModule(module_id: string): Promise<number> {
        return await this.repository.createQueryBuilder("lessons")
        .select("lessons.module_id")
        .where("lessons.module_id = :param",{param: `${module_id}`})
        .getCount();
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}