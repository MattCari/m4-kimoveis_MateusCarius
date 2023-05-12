import { NextFunction, Request, Response } from "express";
import { tCategoryRepository } from "../interfaces/categories.interface";
import { AppDataSource } from "../data-source";
import { Category } from "../entities";
import { AppError } from "../errors";

const ensureCategoryIdExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const categoryRepository: tCategoryRepository =
    AppDataSource.getRepository(Category);

  const foundCategory = await categoryRepository.findOneBy({
    id: Number(req.params.id),
  });
  if (!foundCategory) {
    throw new AppError("Category not found", 404);
  }

  return next();
};

export default ensureCategoryIdExist;
