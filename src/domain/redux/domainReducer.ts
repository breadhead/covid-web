import { combineReducers } from 'redux'

import { claimReducer } from '../claim/redux/claimReducer'
import { DomainState } from './DomainState'

export const domainReducer = combineReducers<DomainState>({
  claim: claimReducer,
})
