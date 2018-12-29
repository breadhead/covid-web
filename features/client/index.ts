import { combineReducers } from 'redux'

export { Situation, Questions } from './features/editClaim'
import {
  reducer as editClaimReducer,
  State as EditClaimState,
} from './features/editClaim'

export { default as Claims } from './features/claims'
import {
  reducer as claimReducer,
  State as ClaimsState,
} from './features/claims'

import { reducer as chatReducer, State as ChatState } from './features/chat'

export { default as NewClaim } from './features/newClaim'
import {
  reducer as newClaimReducer,
  State as NewClaimState,
} from './features/newClaim'

export { default as WaitingPage } from './features/waitingAnswer'

export { default as BeforeConsultation } from './features/beforeConsultation'

export { default as Consultation } from './features/consultation'
import {
  reducer as consultationReducer,
  State as ConsultationState,
} from './features/consultation'

export { default as FormFinish } from './features/formFinish'

export interface State {
  claims: ClaimsState
  newClaim: NewClaimState
  editClaim: EditClaimState
  chat: ChatState
  consultation: ConsultationState
}

export const reducer = combineReducers({
  claims: claimReducer,
  newClaim: newClaimReducer,
  chat: chatReducer,
  editClaim: editClaimReducer,
  consultation: consultationReducer,
} as any)

export { themes } from './values'
