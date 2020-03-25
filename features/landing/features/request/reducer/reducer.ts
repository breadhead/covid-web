import { Action } from 'redux';

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'

interface State extends FetchingState {
  requestFormData?: any
}

interface Actions extends FetchingActions {
  success(requestFormData: string): Action
}

const initialState = createInitialState({
  requestFormData: null,
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, requestFormData: string) => {
    return ({
      ...state,
      requestFormData,
    })
  },
  'saveRequestForm',
)

export { State, reducer, Actions, actions }
