import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { verify } from "jsonwebtoken";
import { UsersRepo } from "../../modules/users/repositories/implementations/UsersRepo";

interface IPayload {
  sub: string;
}
export async function ensureAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token Missing", 401);
  }
  const [, token] = authHeader.split(" ");

  const { sub: user_id } = verify(token, "benjamim") as IPayload;

  const usersRepo = new UsersRepo();

  const user = await usersRepo.findById(user_id)

  if(!user) {
    throw new AppError("Tken invalid", 401);
  }

  req.user = {
    id: user_id
  }
  next();
}
