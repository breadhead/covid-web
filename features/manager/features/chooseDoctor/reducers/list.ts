import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'
import { Doctor } from '@app/models/Users/Doctor'
import { Action } from 'redux'

interface State extends FetchingState {
  doctors: Doctor[]
}

const initialState = createInitialState({
  doctors: [],
})

interface Actions extends FetchingActions {
  success(doctors: Doctor[]): Action
}

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state, doctors) => ({
    ...state,
    fetching: false,
    error: false,
    doctors,
  }),
  'manager/chooseDoctor/list',
)

export { State, reducer, Actions, actions }