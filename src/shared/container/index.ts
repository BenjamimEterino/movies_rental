import { container } from "tsyringe";
import { IUsersRepo } from "../../modules/users/repositories/IUsersRepo";
import { UsersRepo } from "../../modules/users/repositories/implementations/UsersRepo";
import { IGenresRepo } from "../../modules/genres/repos/IGenreRepo";
import { GenreRepo } from "../../modules/genres/repos/implementations/GenresRepo";


container.registerSingleton<IUsersRepo>(
    "UsersRepo",
    UsersRepo
)

container.registerSingleton<IGenresRepo>(
    "GenresRepo",
    GenreRepo
)