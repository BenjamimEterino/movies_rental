import { Router } from "express";
import { CreateRentalController } from "../modules/rentals/useCases/createRental/CreateRentalController";
import { ensureAuth } from "../shared/middlewares/ensureAuth";

const rentalRoutes = Router();

const create = new CreateRentalController();

rentalRoutes.post("/", ensureAuth, create.handle);

export { rentalRoutes };
