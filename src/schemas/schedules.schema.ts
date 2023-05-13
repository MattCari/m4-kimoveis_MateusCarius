import { z } from "zod";
import { realEstateSchemaResponse } from "./real_estate.schema";
import { userSchemaResponse } from "./user.schema";

const scheduleSchema = z.object({
  id: z.number(),
  date: z.string(),
  hour: z.string(),
});

const scheduleSchemaRequest = scheduleSchema
  .omit({
    id: true,
  })
  .extend({ realEstateId: z.number() });

const scheduleSchemaResponse = scheduleSchema.extend({
  realEstateId: z.number(),
  userId: z.number(),
});

const allScheduleDataSchema = scheduleSchemaResponse
  .extend({
    realEstate: realEstateSchemaResponse,
    user: userSchemaResponse,
  })
  .omit({
    realEstateId: true,
  });

export {
  scheduleSchema,
  scheduleSchemaResponse,
  scheduleSchemaRequest,
  allScheduleDataSchema,
};
