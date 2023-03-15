import { inject, injectable } from "tsyringe";
import { IRentalsRepo } from "../../repos/IRentalsRepo";
import { IMoveisRepo } from "../../../movies/repos/IMoviesRepo";
import { ICreateRentalsDTO } from "../../dtos/IcreateRentalsDTO";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateRentalUseCase {
constructor(
@inject("RentalsRepo")
private rentalsRepo: IRentalsRepo

@inject("IMoviesRepo")
private moviesRepo: IMoveisRepo
){}

async execute({user_id, movie_id, expected_return}: ICreateRentalsDTO){
    const minHours = 24;

    const userOpenRental = await this.rentalsRepo.findOpenRentalByUser(user_id);

    if(userOpenRental) {
        throw new AppError("User has an open rental")
    }

    const movieUnavailable = await this.moviesRepo.findByUnvailableById(movie_id);

    if(movieUnavailable) {
        throw new AppError("Movie Unavailable");
    }
}
}

export {CreateRentalUseCase}