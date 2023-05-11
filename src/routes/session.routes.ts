import { Router } from "express";
import loginUserController from "../controllers/userControllers/loginUser.controller";
import validateBodyMiddleware from "../middlewares/validateBody.Middleware";
import { userLoginSchema } from "../schemas/user.schema";

const sessionRoutes: Router = Router();

sessionRoutes.post(
  "",
  validateBodyMiddleware(userLoginSchema),
  loginUserController
);

export default sessionRoutes;
