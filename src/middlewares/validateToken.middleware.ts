import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors";

const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
):void => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    throw new AppError("Missing bearer token", 401);
  }

  const token = authorization.split(" ")[1];

  verify(token, String(process.env.SECRET_KEY), (err: any, decoded: any) => {
    if (err) {
      throw new AppError(err.message, 401);
    }

    res.locals = {
      id: decoded?.sub,
      admin: decoded.admin,
    };

    return next();
  });
};

export default validateToken;
