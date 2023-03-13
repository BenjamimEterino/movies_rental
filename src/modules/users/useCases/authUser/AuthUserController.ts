import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthUserUseCase } from "./AuthUserUseCase";

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
 
    const authUserUseCase = container.resolve(AuthUserUseCase);

    const tokeRes = await authUserUseCase.execute(email, password);

    return res.json(tokeRes);
  }
}

export { AuthUserController };
