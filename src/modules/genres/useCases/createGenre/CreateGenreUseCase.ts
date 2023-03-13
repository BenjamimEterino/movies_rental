import { inject, injectable } from "tsyringe";
import { IGenresRepo } from "../../repos/IGenreRepo";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateGenreUseCase {
  constructor(
    @inject("GenresRepo")
    private genresRepo: IGenresRepo
  ) {}
  async execute(name: string) {

    const genreExits = await this.genresRepo.findByName(name);

    if(genreExits) {
        throw new AppError("Genre exists")
    }
    const genre = await this.genresRepo.create(name);
    return genre;
  }
}

export { CreateGenreUseCase };
