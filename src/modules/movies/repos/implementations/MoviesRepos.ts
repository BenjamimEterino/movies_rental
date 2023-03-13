import { Movie } from "@prisma/client";
import { ICreateMovieDTO } from "../../dtos/ICreateMovieDTO";
import { IMoveisRepo } from "../IMoviesRepo";
import prismaClient from "../../../../prisma";

class MoviesRepo implements IMoveisRepo {
  async   create({ name, description, daily_rate, fine_amount, genre_id }: ICreateMovieDTO): Promise<Movie> {
        const movie = await prismaClient.movie.create({
            data: {
                name,
                description,
                daily_rate,
                fine_amount,
                genre_id,
                available: true
                
            }
        })

        return movie
    }

}

export {MoviesRepo}