import { inject, injectable } from "tsyringe";
import { IGenresRepo } from "../../repos/IGenreRepo";

@injectable()
class ListGenresUseCase {
  constructor(
    @inject("GenresRepo")
    private genreRepo: IGenresRepo
  ) {}
  async execute() {
    const genres = await this.genreRepo.list();

    return genres;
  }
}

export { ListGenresUseCase };
