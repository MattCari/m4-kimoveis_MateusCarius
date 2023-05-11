import { z } from "zod";
import { addressSchemaRequest } from "./addresses.schema";

const realEstateSchema = z.object({
  id: z.number(),
  sold: z.boolean().default(false),
  value: z.number().or(z.string()),
  size: z.number(),
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
  address: addressSchemaRequest,
  categoryId: z.number(),
});

export {realEstateSchema, realEstateSchemaRequest, realEstateSchemaResponse}