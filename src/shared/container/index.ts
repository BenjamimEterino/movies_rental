import { container } from "tsyringe";
import { IUsersRepo } from "../../modules/users/repositories/IUsersRepo";
import { UsersRepo } from "../../modules/users/repositories/implementations/UsersRepo";
import { IGenresRepo } from "../../modules/genres/repos/IGenreRepo";
import { GenreRepo } from "../../modules/genres/repos/implementations/GenresRepo";
import { IMoveisRepo } from "../../modules/movies/repos/IMoviesRepo";
import { MoviesRepo } from "../../modules/movies/repos/implementations/MoviesRepos";


container.registerSingleton<IUsersRepo>(
    "UsersRepo",
    UsersRepo
)

container.registerSingleton<IGenresRepo>(
    "GenresRepo",
    GenreRepo
)

container.registerSingleton<IMoveisRepo>(
    "MoviesRepo",
    MoviesRepo
)