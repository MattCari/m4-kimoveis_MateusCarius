import { NextFunction, Request, Response } from "express";
import { tUser, tUserRepo } from "../interfaces/users.interface";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

const findUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: tUserRepo = AppDataSource.getRepository(User);

  const findUser: tUser | null = await userRepository.findOneBy({
    id: Number(req.params.id),
  });
  if (!findUser) {
    throw new AppError("User not found", 404);
  }
  res.locals.foundUser = findUser;
  return next();
};

export default findUserMiddleware