import { z } from "zod";
import { addressSchema, addressSchemaRequest } from "./addresses.schema";
import { categoriesSchema } from "./categories.schema";

const realEstateSchema = z.object({
  id: z.number(),
  sold: z.boolean().default(false),
  value: z.number().or(z.string()),
  size: z.number().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const realEstateSchemaRequest = realEstateSchema
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
  })
  .extend({
    address: addressSchemaRequest,
    categoryId: z.number(),
  });

const realEstateSchemaResponse = realEstateSchema.extend({
  address: addressSchema,
  category: categoriesSchema,
});
const manyRealEstates = z.array(realEstateSchemaResponse)
export {realEstateSchema, realEstateSchemaRequest, realEstateSchemaResponse, manyRealEstates}