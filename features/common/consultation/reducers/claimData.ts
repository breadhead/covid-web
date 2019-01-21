import { Action } from 'redux'

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'
import { AnswerClaim } from '@app/models/Claim/AnswerClaim'
import { ListedClaim } from '@app/models/Claim/ListedClaim'
import { QuotaClaim } from '@app/models/Claim/QuotaClaim'

interface State extends FetchingState {
  claim?: QuotaClaim
  mainInfo?: ListedClaim
  questions?: AnswerClaim
}

interface Actions extends FetchingActions {
  success(
    claim: QuotaClaim,
    mainInfo: ListedClaim,
    questions: AnswerClaim,
  ): Action
}

const initialState = createInitialState({
  claim: undefined,
  mainInfo: undefined,
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (
    state: State,
    claim: QuotaClaim,
    mainInfo: ListedClaim,
    questions: AnswerClaim,
  ) => ({
    ...state,
    claim,
    mainInfo,
    questions,
  }),
  'common/consultation/claimData',
)

export { State, reducer, Actions, actions }
