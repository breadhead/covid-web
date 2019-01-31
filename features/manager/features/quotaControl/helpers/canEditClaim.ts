import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { Role } from '@app/models/Users/User'
import { size } from 'lodash'

const prohibitedStatuses = [
  ClaimStatus.Closed,
  ClaimStatus.Denied,
  ClaimStatus.DeliveredToCustomer,
]

const canEditClaim = (claimStatus: ClaimStatus, roles: Role[]) => {
  return checkStatus(claimStatus) && checkRoles(roles)
}
const checkRoles = (roles: Role[]) => {
  return !(roles.includes(Role.Doctor) && size(roles) === 1)
}

const checkStatus = (claimStatus: ClaimStatus) => {
  return !prohibitedStatuses.includes(claimStatus)
}

export { canEditClaim }
