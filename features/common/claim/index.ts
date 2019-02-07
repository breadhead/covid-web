import { combineReducers } from 'redux'
import {
  reducer as editClaimReducer,
  State as EditClaimState,
} from './features/editClaim'
import {
  reducer as newClaimReducer,
  State as NewClaimState,
} from './features/newClaim'

export { default as NewClaim } from './features/newClaim'
export {
  createSituationClaim,
  createQuestionsClaim,
  fetchSituationClaim,
  FooterType,
} from './features/editClaim'

export interface State {
  newClaim: NewClaimState
  editClaim: EditClaimState
}

export const reducer = combineReducers({
  newClaim: newClaimReducer,
  editClaim: editClaimReducer,
} as any)
