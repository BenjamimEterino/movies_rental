import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { container } from "tsyringe";

class CreateUserController {
async handle(req: Request, res: Response) {
    const {name, email, password} = req.body;

    const createUserUseCase = container.resolve(CreateUserUseCase)

    const user = await createUserUseCase.execute({
        email,
        name,
        password 
    });

    return res.status(201).json(user);
}
}

export {CreateUserController}