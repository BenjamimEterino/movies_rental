import { inject, injectable } from "tsyringe";
import { IRentalsRepo } from "../../repos/IRentalsRepo";
import { IMoveisRepo } from "../../../movies/repos/IMoviesRepo";
import { ICreateRentalsDTO } from "../../dtos/IcreateRentalsDTO";
import { AppError } from "../../../../errors/AppError";
import { IDateProvider } from "../../../../shared/container/providers/IDateProvider";

@injectable()
class CreateRentalUseCase {
    constructor(
    @inject("RentalsRepo")
    private rentalsRepo: IRentalsRepo,

    @inject("MoviesRepo")
    private moviesRepo: IMoveisRepo,

    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider
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

    const compareHours = this.dateProvider.compareInHours(
        this.dateProvider.dateNow(),
        expected_return
    )

    if(compareHours < minHours) {
        throw new AppError("Invalid time!")
    }

    const rental = await this.rentalsRepo.create({
        user_id,
        movie_id,
        expected_return
    })

    await this.moviesRepo.updateAvailable(movie_id, false);

    return rental;
}
}

export {CreateRentalUseCase}