import { z } from 'zod'

const categoriesSchema = z.object({
    id: z.number(),
    name: z.string()
})

const categoryRequest = categoriesSchema.omit({
    id: true
})

const manyCategoriesResponse = z.array(categoriesSchema)

export {categoriesSchema, categoryRequest, manyCategoriesResponse}