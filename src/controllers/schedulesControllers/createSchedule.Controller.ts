import { Request, Response } from "express";
import createSchedulesService from "../../services/schedulesServices/createSchedule.service";

const createSchedulesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.id;
  const newSchedule = await createSchedulesService(req.body, userId);

  return res.status(201).json(newSchedule);
};
export default createSchedulesController