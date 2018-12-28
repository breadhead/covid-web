import { combineReducers } from 'redux'

export { default as Situation } from './features/Situation'
export { default as ClaimStep3 } from './features/Step3'
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
