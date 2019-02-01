import { combineReducers } from 'redux'
import Container from './container'
import Page from './page'

export default Container(Page as any)

export { default as ExpertAnswers } from './organisms/ExpertAnswers'

import {
  reducer as claimReducer,
  State as ClaimState,
} from './reducers/claimData'
import {
  reducer as nextStatusReducer,
  State as NextStatusState,
} from './reducers/nextStatus'

export interface State {
  claimData: ClaimState
  actions: NextStatusState
}

export const reducer = combineReducers({
  claimData: claimReducer,
  nextStatus: nextStatusReducer,
} as any)

export { fetchQuotaClaim, fetchClaim, nextStatus } from './actions'
export { getClaimId, getClaim, getClaimStatus } from './selectors'
export {
  makeQuestionGroups,
} from './organisms/ExpertAnswers/helpers/makeQuestionGroups'
