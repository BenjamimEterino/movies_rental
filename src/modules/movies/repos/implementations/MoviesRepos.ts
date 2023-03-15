import { Movie } from "@prisma/client";
import { ICreateMovieDTO } from "../../dtos/ICreateMovieDTO";
import { IMoveisRepo, IRequest } from "../IMoviesRepo";
import prismaClient from "../../../../prisma";

class MoviesRepo implements IMoveisRepo {
  async list({ name, genre_id }: IRequest): Promise<Movie[]> {
    const availableMovies = await prismaClient.movie.findMany({
      where: {
        available: true,
      },
    });

    if (name) {
      const movies = availableMovies.filter((movie) => movie.name.includes(name));
      return movies;
    } else if (genre_id) {
      const movies = availableMovies.filter(
        (movie) => movie.genre_id === genre_id
      );
      return movies;
    }
    return availableMovies;
  }
  async create({
    name,
    description,
    daily_rate,
    fine_amount,
    genre_id,
  }: ICreateMovieDTO): Promise<Movie> {
    const movie = await prismaClient.movie.create({
      data: {
        name,
        description,
        daily_rate,
        fine_amount,
        genre_id,
        available: true,
      },
    });

    return movie;
  }
  async findByUnvailableById(id: string): Promise<Movie> {
    const movieUnavailable = await prismaClient.movie.findFirst({
      where: {
        id,
        available: false
      }
    })

    return movieUnavailable as Movie
  }
}

export { MoviesRepo };
