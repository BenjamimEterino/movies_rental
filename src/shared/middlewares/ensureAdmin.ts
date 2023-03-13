import { NextFunction, Request, Response } from "express";
import { UsersRepo } from "../../modules/users/repositories/implementations/UsersRepo";
import { AppError } from "../../errors/AppError";


export async function ensureAdmin( req: Request, res: Response, next: NextFunction) {
    const user_id = req.user.id;
    const usersRepo = new UsersRepo();

    const user = await usersRepo.findById(user_id)

    if(!user.isAdmin) {
        throw new AppError("user is not admin", 401 )
    }

    next();
}