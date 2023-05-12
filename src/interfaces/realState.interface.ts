import {z} from 'zod'
import { manyRealEstates, realEstateSchema, realEstateSchemaRequest, realEstateSchemaResponse } from '../schemas/real_estate.schema'
import { Repository } from 'typeorm'
import { RealEstate } from '../entities'

type tRealEstate = z.infer<typeof realEstateSchema>
type tRealEstateRequest = z.infer<typeof realEstateSchemaRequest>
type tRealEstateResponse = z.infer<typeof realEstateSchemaResponse>
type tRealEstateRepository = Repository<RealEstate>
type tManyRealEstates = z.infer<typeof manyRealEstates>

export {tRealEstate,tRealEstateRequest,tRealEstateResponse,tRealEstateRepository,tManyRealEstates}