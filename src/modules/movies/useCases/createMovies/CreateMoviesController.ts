import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateMoviesUseCase} from "./CreateMovieUseCase"

class CreateMoviesController {
    async handle(req: Request, res: Response) {
        const {name, description, daily_rate, fine_amount, genre_id} = req.body;

        const createMoviesUseCase = container.resolve(CreateMoviesUseCase)

        const movie = await createMoviesUseCase.execute({
            name,
            description,
            daily_rate,
            fine_amount,
            genre_id
        })

        return res.status(201).json(movie);
    }
}

export {CreateMoviesController}