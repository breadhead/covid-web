import ClaimStatus from './ClaimStatus'

export interface ShortClaim {
  id: string
  createdAt: Date
  expireAt?: Date
  status: ClaimStatus
  newMessage: boolean
  email?: string
  personal: boolean
}
