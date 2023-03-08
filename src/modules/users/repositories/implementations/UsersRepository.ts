import { User } from ".prisma/client";
import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../IUsersRepository";
import prismaClient from "../../../../prisma";

class UsersRepository implements IUsersRepository {
   
   async create({ name, email, password }: ICreateUsersDTO): Promise<User> {
        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                password,
                isAdmin: false
            }
        });
        return user;
    }
    async findByEmail(email: string): Promise<User> {
        const user = await prismaClient.user.findFirst({
            where: {email: email}
        });

        return user as User;
    }
     
}

export {UsersRepository}