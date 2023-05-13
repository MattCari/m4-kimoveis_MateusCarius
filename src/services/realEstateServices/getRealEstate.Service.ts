import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import {
  tManyRealEstates,
  tRealEstateRepository,
  tRealEstateResponse,
} from "../../interfaces/realState.interface";


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
