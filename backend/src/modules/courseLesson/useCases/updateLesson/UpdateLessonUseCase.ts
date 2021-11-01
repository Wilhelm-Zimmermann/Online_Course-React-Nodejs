import { inject, injectable } from "tsyringe";
import { ILessonRepository } from "../../repositories/ILessonsRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { UpdateLessonDTO } from "../../dtos/UpdateLessonDTO";

@injectable()
export class UpdateLessonUseCase {

    constructor(
        @inject("LessonsRepository")
        private lessonsRepository: ILessonRepository
    ) { }

    async execute({ id, name, event_date }: UpdateLessonDTO): Promise<void> {
        const lessonExists = await this.lessonsRepository.findById(id);
        const lessonNameExists = await this.lessonsRepository.findByName(name);

        const eventDate = new Date(event_date).getTime();
        const now = new Date().getTime();

        if(eventDate < now) {
            throw new AppError("Event date must be at least 1 day in future (24 hours later)");
        }
        
        if(!lessonExists) {
            throw new AppError("This lesson does not exists", 404);
        }

        if(lessonNameExists) {
            if(lessonNameExists.id != id)
                throw new AppError("Can't have lessons with the same name");
        }


        await this.lessonsRepository.update({
            id,
            name, 
            event_date
        });
    }
}