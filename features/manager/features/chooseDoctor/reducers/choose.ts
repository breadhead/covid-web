import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'
import { Action } from 'redux'

const initialState = createInitialState({})

interface Actions extends FetchingActions {
  success(): Action
}

const { actions, reducer } = createFetchingSymbiote<FetchingState, Actions>(
  initialState,
  state => ({
    ...state,
    fetching: false,
    error: false,
  }),
  'manager/chooseDoctor/list',
)

export { FetchingState as State, reducer, Actions, actions }
