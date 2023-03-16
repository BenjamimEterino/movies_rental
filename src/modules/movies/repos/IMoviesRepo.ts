import { ICreateMovieDTO } from "../dtos/ICreateMovieDTO"
import {Movie} from ".prisma/client"

interface IRequest {
    name?: string;
    genre_id?: string;
}
interface IMoveisRepo {
    updateAvailable(id: string, available: boolean): Promise<void>;
    findByUnvailableById(id: string): Promise<Movie>;
    create({name, description, daily_rate, fine_amount, genre_id}: ICreateMovieDTO): Promise<Movie>
    list({name, genre_id}: IRequest): Promise<Movie[]>
}

export {
    IMoveisRepo,
    IRequest
}