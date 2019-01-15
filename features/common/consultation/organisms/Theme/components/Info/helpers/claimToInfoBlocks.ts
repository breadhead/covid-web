import { SituationClaim } from '@app/models/Claim/SituationClaim'

import clearInfoBlock from './clearInfoBlock'
import clearInfoBlockArray from './clearInfoBlockArray'
import createFelling from './createFeeling'
import { InfoBlock } from './types'

const claimToInfoBlocks = (claim: SituationClaim): InfoBlock[] =>
  clearInfoBlockArray([...createFelling(claim)].map(clearInfoBlock))

export default claimToInfoBlocks
