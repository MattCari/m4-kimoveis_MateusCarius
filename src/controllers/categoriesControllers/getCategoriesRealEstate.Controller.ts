import { Request, Response } from "express";
import getAllCategoriesRealEstatesService from "../../services/categories.services/getCategoriesRealEstate.service";

const getAllCategoriesRealEstatesController = async (req:Request,res:Response): Promise<Response> => {
    const {id} = req.params

    const foundRealEstates = await getAllCategoriesRealEstatesService(Number(id))

    return res.status(200).json(foundRealEstates)
}

export default getAllCategoriesRealEstatesController