import { inject, injectable } from "tsyringe";
import { IGenresRepo } from "../../../genres/repos/IGenreRepo";
import { IMoveisRepo, IRequest } from "../../repos/IMoviesRepo";

@injectable()
class ListMoviesUseCase {
    constructor(
        @inject("MoviesRepo")
        private moviesRepo: IMoveisRepo,
        @inject("GenresRepo")
        private GenresRepo: IGenresRepo
      ) {}

      async execute({name, genre_id}: IRequest) {
        const movies = await this.moviesRepo.list({name, genre_id})

        return movies;
      }
}

export {ListMoviesUseCase}