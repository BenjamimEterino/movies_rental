import { User } from ".prisma/client";
import { IcreateUsersDTO } from "../dtos/ICreateUsersDTO";

interface IUsersRepo {
  create({ name, email, password }: IcreateUsersDTO): Promise<User>;
}

export { IUsersRepo };
