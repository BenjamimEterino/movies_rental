import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { UsersRepo } from "../../repositories/implementations/UsersRepo";

const usersRepo = new UsersRepo();
class CreateUserController {
async handle(req: Request, res: Response) {
    const {name, email, password} = req.body;

    const createUserUseCase = new CreateUserUseCase(usersRepo)

    const user = await createUserUseCase.execute({
        email,
        name,
        password 
    });

    return res.status(201).json(user);
}
}

export {CreateUserController}