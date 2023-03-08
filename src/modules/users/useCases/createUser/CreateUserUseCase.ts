import { inject, injectable } from "tsyringe";
import { IcreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { IUsersRepo } from "../../repositories/IUsersRepo";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepo")
    private userRepo: IUsersRepo
    ) {}

  async execute({ name, email, password }: IcreateUsersDTO) {
    const userExists = await this.userRepo.findByEmail(email);

    if (userExists) {
      throw new Error("User existe");
    }

    const user = await this.userRepo.create({
        email,
        name,
        password
    })

    return user;
  }
}

export { CreateUserUseCase };
