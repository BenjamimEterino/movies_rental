import { ICreateUsersDTO } from "../dtos/ICreateUsersDTO"
import {user} from ".prisma/client"

interface IUsersRepository {
create({name, email, password}: ICreateUsersDTO): Promise<user>
findByEmail(email: string): Promise<user>
}

export {IUsersRepository}