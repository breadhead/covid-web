import { combineReducers } from 'redux'

import {
  reducer as fetchSuccessefullClosedClaims,
  State as FetchSuccessefullClosedClaims,
} from './parts/fetchSuccessefullClosedClaims'

export interface LandingState {
  fetchSuccessefull: FetchSuccessefullClosedClaims
}

export const landingReducer = combineReducers<LandingState>({
  fetchSuccessefull: fetchSuccessefullClosedClaims,
})
