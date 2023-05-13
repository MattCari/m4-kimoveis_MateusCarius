import { z } from 'zod'
import { allScheduleDataSchema, scheduleSchemaRequest, scheduleSchemaResponse } from '../schemas/schedules.schema'
import { Repository } from 'typeorm'
import { Schedule } from '../entities'

type tScheduleRequest = z.infer<typeof scheduleSchemaRequest>
type tScheduleResponse = z.infer<typeof scheduleSchemaResponse>
type tAllScheduleInfo  = z.infer<typeof allScheduleDataSchema>
type tScheduleRepository = Repository<Schedule>

export {
    tAllScheduleInfo,
    tScheduleRepository,
    tScheduleRequest,
    tScheduleResponse
}