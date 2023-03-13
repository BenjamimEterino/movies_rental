import { inject, injectable } from "tsyringe";
import { IUsersRepo } from "../../repositories/IUsersRepo";
import { AppError } from "../../../../errors/AppError";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IResponse {
  user: {
    name: string;
    email: string;
  },
  token: string;
}

@injectable()
class AuthUserUseCase {
  constructor(
    @inject("UsersRepo")
    private usersRepo: IUsersRepo
  ) {}
  async execute(email: string, password: string) {
    const user = await this.usersRepo.findByEmail(email);

    if (!user) {
      throw new AppError("Email or pass incorrect!", 404);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or pass incorrect");
    }

    const token = sign({}, "benjamim", {
      subject: user.id,
      expiresIn: "30d",
    });

    const tokenResponse: IResponse = {
        user: {
            name: user.name,
            email: user.email
        }, token: token
    }


    return tokenResponse
  }
}

export { AuthUserUseCase };
