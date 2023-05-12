import { Request, Response } from "express";
import { tManyCategories } from "../../interfaces/categories.interface";
import getCategoriesService from "../../services/categories.services/getCategories.service";

const getCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const allCategories: tManyCategories = await getCategoriesService();

  return res.status(200).json(allCategories);
};
export default getCategoriesController