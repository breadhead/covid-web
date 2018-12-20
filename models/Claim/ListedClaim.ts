import ClaimStatus from './ClaimStatus'

export interface ListedClaim {
  id: string
  createdAt: Date
  expireAt?: Date
  status: ClaimStatus
  newMessage: boolean
  email?: string
  personal: boolean
}
