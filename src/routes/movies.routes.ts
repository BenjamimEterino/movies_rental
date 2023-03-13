import { Router } from "express";
import { CreateMoviesController } from "../modules/movies/useCases/CreateMoviesController";
import { ensureAuth } from "../shared/middlewares/ensureAuth";

const moviesRoutes = Router();

const create = new CreateMoviesController();

moviesRoutes.post("/", ensureAuth, ensureAuth, create.handle)

export {moviesRoutes}