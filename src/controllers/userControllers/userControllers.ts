import { Request, Response } from "express";
import { tUserResponse } from "../../interfaces/users.interface";
import createUserService from "../../services/userServices/createUser.service";

const createUserController = async (req:Request,res:Response): Promise<Response> => {

    const {body} = req;
    const createdUser: tUserResponse = await createUserService(body)

    return res.status(201).json(createdUser)
}

export default createUserController