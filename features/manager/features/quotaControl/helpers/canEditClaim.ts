import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { Role } from '@app/models/Users/User'
import { size } from 'lodash'

const prohibitedStatuses = [
  ClaimStatus.Closed,
  ClaimStatus.Denied,
  ClaimStatus.DeliveredToCustomer,
]

enum Position {
  Footer = 'Footer',
  Header = 'Header',
}

const checkRoles = (roles: Role[]) => {
  return !(roles.includes(Role.Doctor) && size(roles) === 1)
}

const checkStatus = (claimStatus: ClaimStatus) => {
  return !prohibitedStatuses.includes(claimStatus)
}

const checkPosition = (position?: Position) => position === Position.Footer

const canEditClaim = (
  claimStatus: ClaimStatus,
  roles: Role[],
  position?: Position,
) => {
  return (
    checkStatus(claimStatus) && checkRoles(roles) && checkPosition(position)
  )
}

export { canEditClaim, Position }
