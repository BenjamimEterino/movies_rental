import { inject, injectable } from "tsyringe";
import { ICreateMovieDTO } from "../dtos/ICreateMovieDTO";
import { IMoveisRepo } from "../repos/IMoviesRepo";
import { IGenresRepo } from "../../genres/repos/IGenreRepo";
import { AppError } from "../../../errors/AppError";

@injectable()
class CreateMoviesUseCase {
  constructor(
    @inject("MoviesRepo")
    private moviesRepo: IMoveisRepo,
    @inject("GenresRepo")
    private GenresRepo: IGenresRepo
  ) {}
  async execute({
    name,
    description,
    daily_rate,
    fine_amount,
    genre_id,
  }: ICreateMovieDTO) {
    const genreExists = await this.GenresRepo.findById(genre_id);

    if (!genreExists) {
      throw new AppError("Genre does not exist!", 404);
    }

    const movie = await this.moviesRepo.create({
        name,
        description,
        daily_rate,
        fine_amount,
        genre_id,
    })

    return movie
  }
}

export { CreateMoviesUseCase };
