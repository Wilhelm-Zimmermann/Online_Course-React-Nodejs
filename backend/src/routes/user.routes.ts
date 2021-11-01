import { Router } from "express";
import { AuthenticateUserController } from "../modules/account/useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "../modules/account/useCases/createUser/CreateUserController";
const userRouter = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

userRouter.post("/signup", createUserController.handle);
userRouter.post("/signin", authenticateUserController.handle);

export { userRouter };