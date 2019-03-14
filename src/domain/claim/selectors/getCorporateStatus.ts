import { createSelector } from 'reselect'
import { Option } from 'tsoption'

import { getClaim } from '@app/features/common/consultation'

import { CorporateStatus } from '../enums/CorporateStatus'

export const getCorporateStatus = createSelector(
  getClaim,
  claim => {
    if (!claim) {
      return Option.of<CorporateStatus>(undefined)
    }

    return Option.of(claim.mainInfo.corporateStatus)
  },
)
