import { Router } from "express";
import { lessonRouter } from "./lesson.routes";
import { moduleRouter } from "./module.routes";
import { userRouter } from "./user.routes";
const router = Router();

router.use("/module", moduleRouter);
router.use("/lesson", lessonRouter);
router.use("/user", userRouter);

export { router }