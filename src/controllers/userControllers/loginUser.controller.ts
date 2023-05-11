import { Request, Response } from "express";
import { tUserLogin } from "../../interfaces/users.interface";
import userLoginService from "../../services/userServices/userLogin.service";

const loginUserController = async (req:Request,res:Response): Promise<Response> => {
    const loginData: tUserLogin = req.body
    const token = await userLoginService(loginData)

    return res.json({token:token})
}

export default loginUserController