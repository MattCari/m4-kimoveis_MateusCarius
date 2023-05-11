import { z } from 'zod'

const scheduleSchema = z.object({
    id: z.number(),
    date: z.string(),
    time: z.string(),
})

const scheduleSchemaRequest = scheduleSchema.omit({
    id: true
})

