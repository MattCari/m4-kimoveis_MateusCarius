import { z } from 'zod'
import { addressSchema, addressSchemaRequest } from '../schemas/addresses.schema'
import { Repository } from 'typeorm'
import { Address } from '../entities'

type tAddress = z.infer<typeof addressSchema>
type tAddressRequest =  z.infer<typeof addressSchemaRequest>
type tAddressRepository = Repository<Address>

export {tAddress, tAddressRequest,tAddressRepository}