import { createSelector } from 'reselect'
import { Option } from 'tsoption'

import { getShortClaim } from '@app/features/common/claim/features/newClaim/selectors'

import { CorporateStatus } from '../enums/CorporateStatus'

export const getCorporateStatus = createSelector(
  getShortClaim,
  shortClaim =>
    Option.of(shortClaim).map(() => {
      // TODO: define status
      return CorporateStatus.Checking
    }),
)
