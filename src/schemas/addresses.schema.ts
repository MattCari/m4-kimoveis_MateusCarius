import { z } from "zod";

const addressSchema = z.object({
  id: z.number(),
  street: z.string(),
  zipCode: z.string().max(8),
  number: z.string().max(7).nullish(),
  city: z.string().max(20),
  state: z.string().max(2),
});

const addressSchemaRequest = addressSchema.omit({
  id: true,
});

export { addressSchema, addressSchemaRequest };
