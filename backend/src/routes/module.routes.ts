import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/auth";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { CreateModuleController } from "../modules/courseModule/useCases/createModule/CreateModuleController";
import { DeleteModuleController } from "../modules/courseModule/useCases/deleteModule/DeleteModuleController";
import { ListModulesController } from "../modules/courseModule/useCases/listModules/ListModulesController";
import { SingleModuleController } from "../modules/courseModule/useCases/singleModule/SingleModuleController";
import { UpdateModuleController } from "../modules/courseModule/useCases/updateModule/UpdateModuleController";
const moduleRouter = Router();

const createModuleController = new CreateModuleController();
const listModulesController = new ListModulesController();
const singleModuleController = new SingleModuleController();
const updateModuleController = new UpdateModuleController();
const deleteModuleController = new DeleteModuleController();

moduleRouter.get("/", listModulesController.handle);
moduleRouter.get("/:id", singleModuleController.handle);

moduleRouter.put("/:id", updateModuleController.handle);
moduleRouter.post(
    "/", 
    ensureAuthenticated,
    ensureAdmin,
    createModuleController.handle);
moduleRouter.delete("/:id", deleteModuleController.handle);

export { moduleRouter }