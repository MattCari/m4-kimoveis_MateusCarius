import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Schedule } from "../entities";
import { AppError } from "../errors";
import {
  tScheduleRepository,
  tScheduleRequest,
} from "../interfaces/schedules.interface";

const validateSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schedulesInfo: tScheduleRequest = req.body;
  const userId: string = res.locals.id;

  const schedulesRepo: tScheduleRepository =
    AppDataSource.getRepository(Schedule);

  const schedulesBuilderHour: Schedule | null = await schedulesRepo
    .createQueryBuilder("schedules_appointment")
    .where("schedules_appointment.date = :date", {
      date: schedulesInfo.date,
    })
    .andWhere("schedules_appointment.realEstate = :estate", {
      estate: schedulesInfo.realEstateId,
    })
    .andWhere("schedules_appointment.hour = :hour", {
      hour: schedulesInfo.hour,
    })
    .getOne();

  if (schedulesBuilderHour) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  const schedulesBuilderUser: Schedule | null = await schedulesRepo
    .createQueryBuilder("schedules_appointment")
    .where("schedules_appointment.date = :date", {
      date: schedulesInfo.date,
    })
    .andWhere("schedules_appointment.hour = :hour", {
      hour: schedulesInfo.hour,
    })
    .andWhere("schedules_appointment.userId = :id", { id: userId })
    .getOne();

  if (schedulesBuilderUser) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  const schedulesBuilderUserRealEstate: Schedule | null = await schedulesRepo
    .createQueryBuilder("schedules_appointment")
    .where("schedules_appointment.userId = :id", {
      id: userId,
    })
    .andWhere("schedules_appointment.realEstate = :estate", {
      estate: schedulesInfo.realEstateId,
    })
    .getOne();

  if (schedulesBuilderUserRealEstate) {
    throw new AppError("User schedule to this real estate already exists", 409);
  }

  const [hourString] = schedulesInfo.hour.split(":");
  if (Number(hourString) < 8 || Number(hourString) > 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  const diaUtil: Date = new Date(schedulesInfo.date);
  const day: number = diaUtil.getDay();
  diaUtil.getHours();
  if (day === 0 || day === 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  return next();
};
export default validateSchedule;
