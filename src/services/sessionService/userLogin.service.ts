import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import jwt from "jsonwebtoken";
import { tUser, tUserLogin, tUserRepo } from "../../interfaces/users.interface";

const userLoginService = async (loginData: tUserLogin): Promise<string> => {
  const userRepository: tUserRepo = AppDataSource.getRepository(User);
  const user: tUser | null = await userRepository.findOne({
    where: {
      email: loginData.email,
    },
  });
  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch = await compare(loginData.password, user.password);
  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = jwt.sign(
    {
      admin: user.admin,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: String(user.id),
    }
  );
  return token;
};



export default userLoginService
