import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Address} from "../entities";
import { AppError } from "../errors";
import { tAddressRepository } from "../interfaces/addresses.interface";

const verifyIfAddressIsUnique = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { address } = req.body;
  const addressRepository: tAddressRepository =
    AppDataSource.getRepository(Address);

  const findAddress = await addressRepository.findOneBy({
   ...address,
   number: address.number || ""
  });

  if (findAddress) {
    throw new AppError("Address already exists", 409);
  }

  return next();
};
export default verifyIfAddressIsUnique;
