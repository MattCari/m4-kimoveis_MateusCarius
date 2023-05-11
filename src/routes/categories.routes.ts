import { Router } from "express";
import createCategoryController from "../controllers/categoriesControllers/createCategory.controller";
import validateToken from "../middlewares/validateToken.middleware";
import ensureIsAdmin from "../middlewares/isAdmin.middleware";
import validateBodyMiddleware from "../middlewares/validateBody.Middleware";
import { categoryRequest } from "../schemas/categories.schema";
import ensureCategoryNameIsUnique from "../middlewares/ensureCategoryNameIsUnique";
import getCategoriesController from "../controllers/categoriesControllers/getCategoies.controller";

const categoriesRoutes: Router = Router();

categoriesRoutes.post(
  "",
  validateToken,
  ensureIsAdmin,
  validateBodyMiddleware(categoryRequest),
  ensureCategoryNameIsUnique,
  createCategoryController
);
categoriesRoutes.get("", getCategoriesController);

export default categoriesRoutes;
