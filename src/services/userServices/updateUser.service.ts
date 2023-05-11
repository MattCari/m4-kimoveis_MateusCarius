import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import {
  tUser,
  tUserRepo,
  tUserResponse,
  tUserUpdate,
} from "../../interfaces/users.interface";
import { userSchemaResponse } from "../../schemas/user.schema";

const updateUserService = async (
  data: tUserUpdate,
  foundUser: tUser | null
): Promise<tUserResponse> => {
  const userRepository: tUserRepo = AppDataSource.getRepository(User);
  const newInfo = userRepository.create({
    ...foundUser,
    ...data,
  });
  await userRepository.save(newInfo);

  return userSchemaResponse.parse(newInfo);
};

export default updateUserService