import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { tRealEstateRepository } from "../../interfaces/realState.interface";

const getSchedulesService = async (
  realEstateId: number
): Promise<RealEstate> => {
  const estateRepository: tRealEstateRepository =
    AppDataSource.getRepository(RealEstate);

  const foundRealEstate: RealEstate | null = await estateRepository.findOne({
    where: {
      id: realEstateId,
    },
    relations: {
      address: true,
      category: true,
      schedules: {
      user: true,
      },
    },
  });

  if (!foundRealEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  return foundRealEstate;
};

export default getSchedulesService;
