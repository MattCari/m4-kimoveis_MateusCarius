import { z } from 'zod'
import { categoriesSchema, categoryRequest, manyCategoriesResponse } from '../schemas/categories.schema'
import { Repository } from 'typeorm'
import { Category } from '../entities'

type tCategory = z.infer<typeof categoriesSchema>
type tCategoryRequest = z.infer<typeof categoryRequest>
type tCategoryRepository = Repository<Category>
type tManyCategories = z.infer<typeof manyCategoriesResponse>

export {tCategory, tCategoryRequest, tCategoryRepository, tManyCategories}