import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import {
  tAddressRepository,
  tAddressRequest,
} from "../../interfaces/addresses.interface";
import {
  tCategoryRepository,
  tCategoryRequest,
} from "../../interfaces/categories.interface";
import {
  tRealEstate,
  tRealEstateRepository,
  tRealEstateRequest,
} from "../../interfaces/realState.interface";
import { realEstateSchemaResponse } from "../../schemas/real_estate.schema";

const createRealStateService = async (data: tRealEstateRequest) => {
  const addressRepository: tAddressRepository =
    AppDataSource.getRepository(Address);
  const getAddress: tAddressRequest = addressRepository.create(data.address);
  await addressRepository.save(getAddress);

  const categoriesRepository: tCategoryRepository =
    AppDataSource.getRepository(Category);
  const findCategory: tCategoryRequest | null =
    await categoriesRepository.findOneBy({
      id: Number(data.categoryId),
    });
  const { sold, value, size } = data;

  const realEstateRepository: tRealEstateRepository =
    AppDataSource.getRepository(RealEstate);
  const newRealEstate: tRealEstate = realEstateRepository.create({
    sold: sold,
    value: value,
    size: size,
    address: { ...getAddress },
    category: findCategory!,
  });
  await realEstateRepository.save(newRealEstate);
  return newRealEstate;
};

export default createRealStateService;
