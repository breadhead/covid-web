import { combineReducers } from 'redux'
import Container from './container'
import Page from './page'

export default Container(Page as any)

export { default as ExpertAnswers } from './organisms/ExpertAnswers'

import {
  reducer as actionsReducer,
  State as ActionsState,
} from './features/actions'
import {
  reducer as claimReducer,
  State as ClaimState,
} from './features/claimData'

export interface State {
  claimData: ClaimState
  actions: ActionsState
}

export const reducer = combineReducers({
  claimData: claimReducer,
  actions: actionsReducer,
} as any)

export { nextStatus } from './features/actions'
export { getClaimId, fetchQuotaClaim } from './features/claimData'
