import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { AppError } from "../../errors";
import { tRealEstateRepository } from "../../interfaces/realState.interface";
import {
  tScheduleRepository,
  tScheduleRequest,
} from "../../interfaces/schedules.interface";
import { tUserRepo } from "../../interfaces/users.interface";
import { allScheduleDataSchema } from "../../schemas/schedules.schema";

const createSchedulesService = async (
  scheduleData: tScheduleRequest,
  userId: number
): Promise<object> => {
  const scheduleRepository: tScheduleRepository =
    AppDataSource.getRepository(Schedule);

  const userRepository: tUserRepo = AppDataSource.getRepository(User);

  const realEstateRepository: tRealEstateRepository =
    AppDataSource.getRepository(RealEstate);

  const findUser: User | null = await userRepository.findOneBy({
    id: Number(userId),
  });
  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  let realEstateResult: RealEstate | null;
  if (scheduleData.realEstateId) {
    realEstateResult = await realEstateRepository.findOneBy({
      id: Number(scheduleData.realEstateId),
    });
    if (!realEstateResult) {
      throw new AppError("RealEstate not found", 404);
    }
  }

  const createdSchedule: Schedule = scheduleRepository.create({
    date: scheduleData.date,
    hour: scheduleData.hour,
    realEstate: realEstateResult!,
    user: findUser!,
  });

  await scheduleRepository.save(createdSchedule);

  return { message: "Schedule created" };
};

export default createSchedulesService;
