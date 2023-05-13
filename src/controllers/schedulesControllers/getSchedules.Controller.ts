import { Request, Response } from "express";
import getSchedulesService from "../../services/schedulesServices/getSchedule.service";

const getSchedulesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstateId: number = Number(req.params.id);

  const schedules = await getSchedulesService(realEstateId);

  return res.status(200).json(schedules);
};

export default getSchedulesController