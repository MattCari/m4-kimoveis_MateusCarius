import { Request, Response } from "express";
import createCategoryService from "../../services/categories.services/createCategory.service";

const createCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;
  const newCategory = await createCategoryService(body);

  return res.status(201).json(newCategory);
};

export default createCategoryController