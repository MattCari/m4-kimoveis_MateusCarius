import { Request, Response } from "express";
import getUsersService from "../../services/userServices/getUsers.service";
import { tUserResponse } from "../../interfaces/users.interface";

const getUsersController = async (req:Request, res: Response): Promise<Response> => {

    const users: tUserResponse[] = await getUsersService()

    return res.status(200).json(users)
}

export default getUsersController