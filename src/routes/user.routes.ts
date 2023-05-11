import { Router } from "express";
import { userSchemaRequest, userUpdateSchema } from "../schemas/user.schema";
import validateBodyMiddleware from "../middlewares/validateBody.Middleware";
import ensureEmailIsUnique from "../middlewares/ensureEmailIsUnique.middleware";
import createUserController from "../controllers/userControllers/userControllers";
import validateToken from "../middlewares/validateToken.middleware";
import getUsersController from "../controllers/userControllers/getUsers.controller";
import ensureIsAdmin from "../middlewares/isAdmin.middleware";
import isAdminOrOwner from "../middlewares/adminOrOwner.middleware";
import updateUserController from "../controllers/userControllers/updateUser.controller";
import findUserMiddleware from "../middlewares/findUserById.middleware";
import deleteUserController from "../controllers/userControllers/deleteUser.controller";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  validateBodyMiddleware(userSchemaRequest),
  ensureEmailIsUnique,
  createUserController
);
userRoutes.get("", validateToken, ensureIsAdmin, getUsersController);
userRoutes.patch(
  "/:id",
  validateToken,
  findUserMiddleware,
  isAdminOrOwner,
  validateBodyMiddleware(userUpdateSchema),
  updateUserController
);
userRoutes.delete(
  "/:id",
  validateToken,
  findUserMiddleware,
  isAdminOrOwner,
  deleteUserController
);

export default userRoutes;
