import { Request, Response } from "express";
import {
  tUser,
  tUserUpdate,
} from "../../interfaces/users.interface";
import updateUserService from "../../services/userServices/updateUser.service";

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const foundUser:tUser = res.locals.foundUser
  const payload: tUserUpdate = req.body;

  const updatedUser = await updateUserService(payload, foundUser);

  return res.status(200).json(updatedUser);
};

export default updateUserController