import { z } from "zod";

const addressSchema = z.object({
  id: z.number(),
  street: z.string(),
  zipCode: z.string(),
  number: z.string().nullish(),
  city: z.string(),
  state: z.string(),
});

const addressSchemaRequest = addressSchema.omit({
  id: true,
});

export { addressSchema, addressSchemaRequest };
