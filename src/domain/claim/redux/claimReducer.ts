import { combineReducers } from 'redux'

import { ClaimState } from './ClaimState'
import { reducer as changeCorporateStatus } from './parts/changeCorporateStatus'

export const claimReducer = combineReducers<ClaimState>({
  changeCorporateStatus,
})
