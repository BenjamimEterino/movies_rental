import { ICreateMovieDTO } from "../dtos/ICreateMovieDTO"
import {Movie} from ".prisma/client"


interface IMoveisRepo {
    create({name, description, daily_rate, fine_amount, genre_id, available}: ICreateMovieDTO): Promise<Movie>
}

export {
    IMoveisRepo
}