import {
  createFetchingSymbiote, createInitialState,
  FetchingActions, FetchingState,
} from '@app/lib/symbioteFactory'
import { Action } from 'redux'

interface State extends FetchingState {
  token: string,
}

interface Actions extends FetchingActions {
  success(token: string): Action
}

const initialState = createInitialState({
  token: '',
})

interface Actions {
  request(): Action
  success(token: string): Action
  error(error: string): Action
}

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state, token) => ({
    ...state,
    token,
  }),
  'login',
)

export {
  State, reducer,
  Actions, actions,
}
