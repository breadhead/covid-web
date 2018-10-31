import {
  createFetchingSymbiote, createInitialState,
  FetchingActions, FetchingState,
} from '@app/lib/symbioteFactory'
import { Action } from 'redux'

interface State extends FetchingState {
  data: any[],
}

const initialState = createInitialState({
  data: [],
})

interface Actions {
  request(): Action
  success(data: any[]): Action
  error(error: string): Action
}

interface Actions extends FetchingActions {
  success(data: any[]): Action
}

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state, data) => ({
    ...state,
    data,
  }),
  'quotas',
)

export {
  State, reducer,
  Actions, actions,
}
