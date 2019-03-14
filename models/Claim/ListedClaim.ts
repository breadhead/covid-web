import { CorporateStatus } from '@app/src/domain/claim/enums/CorporateStatus'

import ClaimStatus from './ClaimStatus'
import ClaimTarget from './ClaimTarget'

export interface ListedClaim {
  id: string
  number: number
  createdAt: Date
  expireAt?: Date
  status: ClaimStatus
  newMessage: boolean
  email?: string
  target: ClaimTarget
  corporateStatus: CorporateStatus
}
