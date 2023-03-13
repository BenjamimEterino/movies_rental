

import { Router } from "express";
import { ensureAuth } from "../shared/middlewares/ensureAuth";
import { ensureAdmin } from "../shared/middlewares/ensureAdmin";
import { CreateGenreControlelr } from "../modules/genres/useCases/createGenre/CreateGenreController";
import { ListGenresController } from "../modules/genres/useCases/listGenres/ListGenresController";

const genreRoutes = Router();
const createGenreController = new CreateGenreControlelr()
const listGenresController = new ListGenresController()

genreRoutes.post("/", ensureAuth, ensureAdmin, createGenreController.handle );
genreRoutes.get("/", listGenresController.handle)

export {genreRoutes}