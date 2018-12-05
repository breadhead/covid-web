import {
  createFetchingSymbiote, createInitialState,
  FetchingActions, FetchingState,
} from '@app/lib/symbioteFactory'
import { Action } from 'redux'

const initialState = createInitialState({
  number: '',
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state, number) => ({
    ...state,
    number,
  }),
  'number',
)

export {
  State, reducer,
  Actions, actions,
}
