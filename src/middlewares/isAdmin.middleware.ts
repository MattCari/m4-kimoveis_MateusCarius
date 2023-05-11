import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const ensureIsAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const isAdmin = res.locals.admin;
  if (isAdmin === true) {
    return next();
  } else {
    throw new AppError("Insufficient permission", 403);
  }
};

export default ensureIsAdmin;
