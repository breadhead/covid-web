import { CorporateStatus } from '@front/domain/claim/enums/CorporateStatus'

import ClaimStatus from './ClaimStatus'
import ClaimTarget from './ClaimTarget'
import { DontUnderstandEnum } from '@app/features/client/features/consultation/DontUnderstandEnum'

export interface ListedClaim {
  id: string
  number: number
  createdAt: Date
  editedAt?: Date
  answeredAt?: Date
  draftedAt?: Date
  answerUpdatedAt?: Date
  expireAt?: Date
  status: ClaimStatus
  newMessage: boolean
  email?: string
  target: ClaimTarget
  closeComment?: string
  corporateStatus: CorporateStatus
  dontUnderstand: DontUnderstandEnum
}
