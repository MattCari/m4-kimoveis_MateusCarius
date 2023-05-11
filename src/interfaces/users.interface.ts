import { z } from "zod";
import {
  userLoginSchema,
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
} from "../schemas/user.schema";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities";

type tUser = z.infer<typeof userSchema>;
type tUserRequest = z.infer<typeof userSchemaRequest>;
type tUserResponse = z.infer<typeof userSchemaResponse>;
type tUserLogin = z.infer<typeof userLoginSchema>;
type tUserUpdate = DeepPartial<tUserResponse>;
type tUserRepo = Repository<User>

export { tUser, tUserLogin, tUserRequest, tUserResponse, tUserUpdate, tUserRepo };
