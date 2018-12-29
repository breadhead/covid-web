import { combineReducers } from 'redux'

export { default as Situation, fetchSituationClaim } from './features/Situation'
export { default as Questions } from './features/Questions'
import {
  reducer as situationReducer,
  State as SituationState,
} from './features/Situation'

export interface State {
  situation: SituationState
  questions: SituationState
}

export const reducer = combineReducers({
  situation: situationReducer,
  questions: situationReducer,
} as any)
