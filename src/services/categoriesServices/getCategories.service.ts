import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import {
  tCategoryRepository,
  tManyCategories,
} from "../../interfaces/categories.interface";
import { manyCategoriesResponse } from "../../schemas/categories.schema";

const getCategoriesService = async (): Promise<tManyCategories> => {
  const categoryRepository: tCategoryRepository =
    AppDataSource.getRepository(Category);
  const manyCategories: tManyCategories = await categoryRepository.find();

  return manyCategoriesResponse.parse(manyCategories);
};

export default getCategoriesService