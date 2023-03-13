import { Router } from "express";
import { CreateMoviesController } from "../modules/movies/useCases/createMovies/CreateMoviesController";
import { ensureAuth } from "../shared/middlewares/ensureAuth";
import { ListMoviesController } from "../modules/movies/useCases/listMovies/ListMoviesController";

const moviesRoutes = Router();

const create = new CreateMoviesController();
const list = new ListMoviesController();

moviesRoutes.post("/", ensureAuth, ensureAuth, create.handle)
moviesRoutes.get("/", list.handle)

export {moviesRoutes}