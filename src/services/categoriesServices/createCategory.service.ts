import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import {
  tCategory,
  tCategoryRepository,
  tCategoryRequest,
} from "../../interfaces/categories.interface";
import { categoriesSchema } from "../../schemas/categories.schema";

const createCategoryService = async (data: tCategoryRequest): Promise<tCategory> => {
  const categoryRepository: tCategoryRepository =
    AppDataSource.getRepository(Category);
  const newCategory: tCategory = categoryRepository.create(data);
  await categoryRepository.save(newCategory);

  return categoriesSchema.parse(newCategory);
};

export default createCategoryService