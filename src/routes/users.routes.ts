import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { AuthUserController } from "../modules/users/useCases/authUser/AuthUserController";

const userRoutes = Router();


const createUserController = new CreateUserController()
const authUserController = new AuthUserController();

userRoutes.post("/", createUserController.handle)
userRoutes.post("/session", authUserController.handle)

export {userRoutes}