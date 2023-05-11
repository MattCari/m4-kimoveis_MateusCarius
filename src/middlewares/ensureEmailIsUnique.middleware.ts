import { NextFunction, Request, Response } from "express";
import { tUserRepo } from "../interfaces/users.interface";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

const ensureEmailIsUnique = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository: tUserRepo = AppDataSource.getRepository(User);
  const existingEmail = await userRepository.find({
    where: {
      email: req.body.email,
    },
  });

  if (existingEmail.length > 0) {
    throw new AppError("Email already exists", 409);
  }
  return next();
};

export default ensureEmailIsUnique;
