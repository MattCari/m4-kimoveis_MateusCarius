import { Request, Response } from "express";
import getRealStateService from "../../services/realEstateServices/getRealEstate.Service";

const getAllRealEstatesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const allRealEstates = await getRealStateService();

  return res.status(200).json(allRealEstates);
};

export default getAllRealEstatesController;
