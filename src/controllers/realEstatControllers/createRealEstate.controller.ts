import { Request, Response } from "express";
import createRealStateService from "../../services/realEstateServices/createRealEstate.service";

const createRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;
  const newRealEstate = await createRealStateService(body);

  return res.status(201).json(newRealEstate);
};

export default createRealEstateController