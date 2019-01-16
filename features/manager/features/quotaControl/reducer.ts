import { Action } from 'redux'

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'
import ClaimBoardCard from '@app/models/Claim/ClaimBoardCard'

interface State extends FetchingState {
  claimBoardCard?: ClaimBoardCard
}

interface Actions extends FetchingActions {
  success(claimBoardCard: ClaimBoardCard): Action
}

const initialState = createInitialState({
  claimBoardCard: {},
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, claimBoardCard: ClaimBoardCard) => ({
    ...state,
    claimBoardCard,
    error: false,
    fetching: false,
  }),
  'claim/trelloUrl',
)

export { State, reducer, Actions, actions }
