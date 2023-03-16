import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRentalUseCase } from "./CreateRentalUseCase";

class CreateRentalController {
  async handle(req: Request, res: Response) {
    const { movie_id, expected_return } = req.body;
    const { id } = req.user;

    const createRentalUserCase = container.resolve(CreateRentalUseCase);

    const rental = await createRentalUserCase.execute({
      user_id: id,
      movie_id,
      expected_return,
    });

    return res.status(201).json(rental);
  }
}

export { CreateRentalController };
