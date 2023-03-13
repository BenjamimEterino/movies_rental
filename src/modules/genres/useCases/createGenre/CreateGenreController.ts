import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateGenreUseCase } from "./CreateGenreUseCase";


class CreateGenreControlelr {
 async handle(req: Request, res: Response) {
    const {name} = req.body;

    const createGenreUseCase = await container.resolve(CreateGenreUseCase);

    const genre = await createGenreUseCase.execute(name);

    return res.status(201).json(genre);
 }
}

export {CreateGenreControlelr}