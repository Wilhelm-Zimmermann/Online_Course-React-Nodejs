import { Router } from "express";
import { CountLessonsInModuleController } from "../modules/courseLesson/useCases/countLessonsInModule/CountLessonsInModuleController";
import { CreateLessonController } from "../modules/courseLesson/useCases/createLesson/CreateLessonController";
import { DeleteLessonController } from "../modules/courseLesson/useCases/deleteLesson/DeleteLessonController";
import { FindLessonsPerModuleController } from "../modules/courseLesson/useCases/findLessonsPerModule/FindLessonsPerModuleController";
import { ListLessonsController } from "../modules/courseLesson/useCases/listLessons/ListLessonsController";
import { SingleLessonController } from "../modules/courseLesson/useCases/singleLesson/SingleLessonController";
import { UpdateLessonController } from "../modules/courseLesson/useCases/updateLesson/UpdateLessonController";
const lessonRouter = Router();

const createLessonController = new CreateLessonController();
const listLessonsController = new ListLessonsController();
const updateLessonController = new UpdateLessonController();
const singleLessonController = new SingleLessonController();
const deleteLessonController = new DeleteLessonController();
const countLessonsInModuleController = new CountLessonsInModuleController();
const findLessonsPerModuleController = new FindLessonsPerModuleController();

lessonRouter.post("/", createLessonController.handle);
lessonRouter.get("/", listLessonsController.handle);

lessonRouter.get("/:id", singleLessonController.handle);
lessonRouter.put("/:id", updateLessonController.handle);

lessonRouter.get("/count/:module_id", countLessonsInModuleController.handle);
lessonRouter.get("/module/:module_id", findLessonsPerModuleController.handle);

lessonRouter.delete("/:id", deleteLessonController.handle);

export { lessonRouter };