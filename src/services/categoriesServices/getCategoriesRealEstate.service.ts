import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import {
  tCategoryRepository,
} from "../../interfaces/categories.interface";

const getAllCategoriesRealEstatesService = async (id: number): Promise<Category> => {
  const categoryRepository: tCategoryRepository =
    AppDataSource.getRepository(Category);
  const findRealEstateInCategory: Category | null =
    await categoryRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        realEstate: true,
      },
    });
  return findRealEstateInCategory!;
};

export default getAllCategoriesRealEstatesService