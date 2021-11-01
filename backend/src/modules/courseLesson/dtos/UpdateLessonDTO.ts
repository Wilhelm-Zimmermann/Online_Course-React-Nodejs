import { CreateLessonDTO } from "./CreateLessonDTO"

export type UpdateLessonDTO = Omit<CreateLessonDTO, "module_id">