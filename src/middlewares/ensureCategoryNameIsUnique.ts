import { NextFunction, Request, Response } from "express";
import { tCategory, tCategoryRepository } from "../interfaces/categories.interface";
import { AppDataSource } from "../data-source";
import { Category } from "../entities";
import { AppError } from "../errors";

    const ensureCategoryNameIsUnique = async (req:Request,res:Response,next:NextFunction): Promise<void> => {

        const categoryRepository:tCategoryRepository = AppDataSource.getRepository(Category)

        const findCategory = await categoryRepository.find({
            where: {
                name: req.body.name
            }
        })
        if(findCategory.length > 0){
            throw new AppError("Category already exists", 409)
        }

        return next()
    }
    export default ensureCategoryNameIsUnique