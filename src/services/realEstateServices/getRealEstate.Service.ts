import { AppDataSource } from "../../data-source";
import { Address, RealEstate } from "../../entities";
import {
  tManyRealEstates,
  tRealEstateRepository,
  tRealEstateResponse,
} from "../../interfaces/realState.interface";
import { manyRealEstates } from "../../schemas/real_estate.schema";

const getRealStateService = async (): Promise<tManyRealEstates> => {
  const realEstateRepository: tRealEstateRepository =
    AppDataSource.getRepository(RealEstate);
  const allRealEstates: tRealEstateResponse[] = await realEstateRepository.find(
    {
      relations: {
        address: true,
      },
    }
  );

  return allRealEstates;
};

export default getRealStateService;
