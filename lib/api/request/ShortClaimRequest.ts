import { Omit } from 'utility-types'

import { ShortClaim } from '@app/models/Claim/ShortClaim'

type ShortClaimRequest = Omit<ShortClaim, 'id' | 'quotaAllocated'>

export default ShortClaimRequest
