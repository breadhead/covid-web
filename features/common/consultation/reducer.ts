import { Action } from 'redux'

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'
import { ListedClaim } from '@app/models/Claim/ListedClaim'
import { QuestionsClaim } from '@app/models/Claim/QuestionsClaim'
import { QuotaClaim } from '@app/models/Claim/QuotaClaim'

interface State extends FetchingState {
  claim?: QuotaClaim
  mainInfo?: ListedClaim
  questions?: QuestionsClaim
}

interface Actions extends FetchingActions {
  success(
    claim: QuotaClaim,
    mainInfo: ListedClaim,
    questions: QuestionsClaim,
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
    questions: QuestionsClaim,
  ) => ({
    ...state,
    claim,
    mainInfo,
    questions,
  }),
  'common/consultation',
)

export { State, reducer, Actions, actions }
