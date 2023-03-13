import { ICreateMovieDTO } from "../dtos/ICreateMovieDTO"
import {Movie} from ".prisma/client"

interface IRequest {
    name?: string;
    genre_id?: string;
}
interface IMoveisRepo {
    create({name, description, daily_rate, fine_amount, genre_id}: ICreateMovieDTO): Promise<Movie>
    list({name, genre_id}: IRequest): Promise<Movie[]>
}

export {
    IMoveisRepo,
    IRequest
}