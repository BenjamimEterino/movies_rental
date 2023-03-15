import { Rental } from "@prisma/client";
import prismaClient from "../../../../prisma";
import { ICreateRentalsDTO } from "../../dtos/IcreateRentalsDTO";
import { IRentalsRepo } from "../IRentalsRepo";

class RentalsRepo implements IRentalsRepo{
    async   create({ user_id, movie_id, expected_return }: ICreateRentalsDTO): Promise<Rental> {
       const rental = await prismaClient.rental.create({
        data: {
            user_id,
            movie_id,
            expected_return
        }
       })

       return rental;
    }

    async findOpenRentalByUser(user_id: string): Promise<Rental> {
        const openRental = await prismaClient.rental.findFirst({
            where: {
                user_id,
                end_at: null
            }
        })

        return openRental as Rental;
    }

}

export {RentalsRepo}