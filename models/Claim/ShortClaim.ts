import ClaimStatus from './ClaimStatus'

export default interface ShortClaim {
  id: string
  status: ClaimStatus
  newMessage: boolean
}
