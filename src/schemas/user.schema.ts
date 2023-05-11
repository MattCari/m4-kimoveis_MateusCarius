import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email(),
  admin: z.boolean().default(false),
  password: z.string(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  deletedAt: z.string().or(z.date()).nullish(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const manyUsersSchemaResponse = z.array(userSchemaResponse);

const userUpdateSchema = userSchema
  .omit({
    id: true,
    admin: true,
  })
  .partial();

const userLoginSchema = userSchema.omit({
  id: true,
  createdAt: true,
  admin: true,
  updatedAt: true,
  deletedAt: true,
  name: true,
});

export {
  userSchema,
  userLoginSchema,
  userSchemaResponse,
  userSchemaRequest,
  userUpdateSchema,
  manyUsersSchemaResponse
};
