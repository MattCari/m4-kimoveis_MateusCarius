import { Router } from "express";
import validateToken from "../middlewares/validateToken.middleware";
import validateBodyMiddleware from "../middlewares/validateBody.Middleware";
import ensureIsAdmin from "../middlewares/isAdmin.middleware";
import { realEstateSchemaRequest } from "../schemas/real_estate.schema";
import createRealEstateController from "../controllers/realEstatControllers/createRealEstate.controller";
import verifyIfAddressIsUnique from "../middlewares/verifyIfAddresIsUnique.middleware";
import getAllRealEstatesController from "../controllers/realEstatControllers/getAllRealEstates.Controller";

const realEstateRoutes: Router = Router();

realEstateRoutes.post(
  "",
  validateToken,
  ensureIsAdmin,
  validateBodyMiddleware(realEstateSchemaRequest),
  verifyIfAddressIsUnique,
  createRealEstateController
);

realEstateRoutes.get("", getAllRealEstatesController)
export default realEstateRoutes;
