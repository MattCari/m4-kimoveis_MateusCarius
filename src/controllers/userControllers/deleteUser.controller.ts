import { Request, Response } from "express";
import deleteUserService from "../../services/userServices/deleteUser.service";

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const toBeDeleted = res.locals.foundUser;

  await deleteUserService(toBeDeleted);

  return res.status(204).json();
};

export default deleteUserController