import { container } from "tsyringe";
import { IUsersRepo } from "../../modules/users/repositories/IUsersRepo";
import { UsersRepo } from "../../modules/users/repositories/implementations/UsersRepo";


container.registerSingleton<IUsersRepo>(
    "UsersRepo",
    UsersRepo
)