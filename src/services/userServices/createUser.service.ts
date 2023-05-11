import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import {
  tUser,
  tUserRepo,
  tUserRequest,
  tUserResponse,
} from "../../interfaces/users.interface";
import { userSchemaResponse } from "../../schemas/user.schema";

const createUserService = async (
  data: tUserRequest
): Promise<tUserResponse> => {
  const userRepo: tUserRepo = AppDataSource.getRepository(User);
  const newUser: tUser = userRepo.create(data);
  await userRepo.save(newUser);
  return userSchemaResponse.parse(newUser);
};

export default createUserService;
