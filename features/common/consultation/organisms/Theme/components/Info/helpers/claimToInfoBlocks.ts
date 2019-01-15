import { SituationClaim } from '@app/models/Claim/SituationClaim'

import clearInfoBlock from './clearInfoBlock'
import clearInfoBlockArray from './clearInfoBlockArray'
import createExamination from './createExamination'
import createFelling from './createFeeling'
import createInfo from './createInfo'
import { InfoBlock } from './types'

const claimToInfoBlocks = (claim: SituationClaim): InfoBlock[] =>
  clearInfoBlockArray(
    [
      ...createInfo(claim),
      ...createFelling(claim),
      ...createExamination(claim),
    ].map(clearInfoBlock),
  )

export default claimToInfoBlocks
