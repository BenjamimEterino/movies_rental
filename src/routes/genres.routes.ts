

import { Router } from "express";
import { ensureAuth } from "../shared/middlewares/ensureAuth";
import { ensureAdmin } from "../shared/middlewares/ensureAdmin";
import { CreateGenreControlelr } from "../modules/genres/useCases/createGenre/CreateGenreController";

const genreRoutes = Router();
const createGenreController = new CreateGenreControlelr()
genreRoutes.post("/", ensureAuth, ensureAdmin, createGenreController.handle );

export {genreRoutes}