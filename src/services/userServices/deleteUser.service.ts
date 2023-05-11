import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { tUser, tUserRepo } from "../../interfaces/users.interface";

const deleteUserService = async (foundUser:tUser): Promise<void> => {

    const userRepository: tUserRepo = AppDataSource.getRepository(User)
    
    await userRepository.softRemove(foundUser)

    return
}

export default deleteUserService