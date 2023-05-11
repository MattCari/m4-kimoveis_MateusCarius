import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const isAdminOrOwner = (
  req: Request,
  resp: Response,
  next: NextFunction
): void => {
  const { admin, id } = resp.locals;
  const idParams = req.params.id;

  if (!admin && Number(id) !== Number(idParams)) {
    throw new AppError("Insufficient permission", 403);
  }
  return next();
};

export default isAdminOrOwner