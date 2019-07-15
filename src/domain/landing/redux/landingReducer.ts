import { combineReducers } from 'redux'

import { LandingState } from './LandingState'
import { reducer as fetchSuccessefullClosedClaims } from './parts/fetchSuccessefullClosedClaims'

export const landingReducer = combineReducers<LandingState>({
  fetchSuccessefullClosedClaims,
})
