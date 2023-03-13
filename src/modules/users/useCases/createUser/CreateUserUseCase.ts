import { inject, injectable } from "tsyringe";
import { IcreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { IUsersRepo } from "../../repositories/IUsersRepo";
import { hash } from "bcrypt";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepo")
    private userRepo: IUsersRepo
  ) {}

  async execute({ name, email, password }: IcreateUsersDTO) {
    const userExists = await this.userRepo.findByEmail(email);

    if (userExists) {
      throw new AppError("Users Exists!");
    }

    const passwordHash = await hash(password, 8);

    const user = await this.userRepo.create({
      email,
      name,
      password: passwordHash,
    });

    return user;
  }
}

export { CreateUserUseCase };
