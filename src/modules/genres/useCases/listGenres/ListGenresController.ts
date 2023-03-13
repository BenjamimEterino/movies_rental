import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListGenresUseCase } from "./ListGenresUseCase";

class ListGenresController {
  async handle(req: Request, res: Response) {
    const listGenresUseCase = await container.resolve(ListGenresUseCase);

    const genres = await listGenresUseCase.execute();

    return res.json(genres);
  }
}

export { ListGenresController };
