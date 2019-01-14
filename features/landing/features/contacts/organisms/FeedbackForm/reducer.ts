import { Action } from 'redux'

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'

interface State extends FetchingState {
  feedbackFields?: any
}

interface Actions extends FetchingActions {
  success(feedbackFields: any): Action
}

const initialState = createInitialState({
  feedbackFields: undefined,
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, feedbackFields: any) => ({
    ...state,
    feedbackFields,
  }),
  'sendFeedback',
)

export { State, reducer, Actions, actions }
