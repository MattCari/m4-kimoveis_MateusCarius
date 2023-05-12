import { z } from 'zod'
import {realEstateSchemaResponse } from './real_estate.schema'

const categoriesSchema = z.object({
    id: z.number(),
    name: z.string()
})

const categoryRequest = categoriesSchema.omit({
    id: true
})

const manyCategoriesResponse = z.array(categoriesSchema)

const categoryAndRealEstate = categoriesSchema.extend({
    realEstate:realEstateSchemaResponse.omit({category: true})
})

export {categoriesSchema, categoryRequest, manyCategoriesResponse, categoryAndRealEstate}