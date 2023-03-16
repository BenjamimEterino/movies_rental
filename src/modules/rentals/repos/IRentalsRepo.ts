import { ICreateRentalsDTO } from "../dtos/IcreateRentalsDTO"
import {Rental} from "@prisma/client"

interface IRentalsRepo {
findOpenRentalByUser(user_id: string): Promise<Rental>
create({user_id, movie_id, expected_return}: ICreateRentalsDTO): Promise<Rental>
}

export {IRentalsRepo}