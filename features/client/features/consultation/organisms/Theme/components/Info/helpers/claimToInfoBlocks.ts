import { SituationClaim } from '@app/models/Claim/SituationClaim'

import createFelling from './createFeeling'
import { InfoBlock } from './types'

const claimToInfoBlocks = (claim: SituationClaim): InfoBlock[] => [
  ...createFelling(claim),
]

export default claimToInfoBlocks
