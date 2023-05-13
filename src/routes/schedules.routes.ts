import { Router } from "express";
import validateToken from "../middlewares/validateToken.middleware";
import validateBodyMiddleware from "../middlewares/validateBody.Middleware";
import validateSchedule from "../middlewares/validSchedule.middleware";
import createSchedulesController from "../controllers/schedulesControllers/createSchedule.Controller";
import { scheduleSchemaRequest } from "../schemas/schedules.schema";
import ensureIsAdmin from "../middlewares/isAdmin.middleware";
import getSchedulesController from "../controllers/schedulesControllers/getSchedules.Controller";

const scheduleRoutes: Router = Router();

scheduleRoutes.post(
  "",
  validateToken,
  validateBodyMiddleware(scheduleSchemaRequest),
  validateSchedule,
  createSchedulesController
);

scheduleRoutes.get(
  "/realEstate/:id",
  validateToken,
  ensureIsAdmin,
  getSchedulesController
);
export default scheduleRoutes;
