import { Router } from "express";
import { userRoutes } from "./users.routes";
import { genreRoutes } from "./genres.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/genres", genreRoutes)

export {routes}