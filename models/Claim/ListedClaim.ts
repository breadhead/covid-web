import ClaimStatus from './ClaimStatus'
import ClaimTarget from './ClaimTarget'

export interface ListedClaim {
  id: string
  createdAt: Date
  expireAt?: Date
  status: ClaimStatus
  newMessage: boolean
  email?: string
  target: ClaimTarget
}
