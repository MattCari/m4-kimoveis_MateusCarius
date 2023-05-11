import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { tUserRepo, tUserResponse } from "../../interfaces/users.interface";
import { manyUsersSchemaResponse } from "../../schemas/user.schema";


const getUsersService = async (): Promise<tUserResponse[]> => {

    const userRepository:tUserRepo = AppDataSource.getRepository(User) 

    const allUsers: tUserResponse[] = await userRepository.find()

    return manyUsersSchemaResponse.parse(allUsers)
}

export default getUsersService