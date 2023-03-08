import { User } from ".prisma/client";
import prismaClient from "../../../../prisma";
import { IcreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { IUsersRepo } from "../IUsersRepo";

class UsersRepo implements IUsersRepo {
 async create({ name, email, password }: IcreateUsersDTO): Promise<User> {
    const user = await prismaClient.user.create({
        data: {
            name,
            email,
            password,
            isAdmin: false
        }
    })

    return user
  }
}

export { UsersRepo };
