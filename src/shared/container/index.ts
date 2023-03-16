import { container } from "tsyringe";
import { IUsersRepo } from "../../modules/users/repositories/IUsersRepo";
import { UsersRepo } from "../../modules/users/repositories/implementations/UsersRepo";
import { IGenresRepo } from "../../modules/genres/repos/IGenreRepo";
import { GenreRepo } from "../../modules/genres/repos/implementations/GenresRepo";
import { IMoveisRepo } from "../../modules/movies/repos/IMoviesRepo";
import { MoviesRepo } from "../../modules/movies/repos/implementations/MoviesRepos";
import { IRentalsRepo } from "../../modules/rentals/repos/IRentalsRepo";
import { RentalsRepo } from "../../modules/rentals/repos/implementations/RentalsRepo";
import { IDateProvider } from "./providers/IDateProvider";
import { DayjsDateProvider } from "./providers/implementations/DayjsDateProvider";


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

container.registerSingleton<IRentalsRepo>(
    "RentalsRepo",
    RentalsRepo
)

container.registerSingleton<IDateProvider>(
    "DayjsDateProvider",
    DayjsDateProvider
  );
  