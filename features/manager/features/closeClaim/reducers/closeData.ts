import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'
import { initial, InitialValues } from '../organisms/Modal/config'

interface State {
  data: InitialValues
}

interface Actions {
  addCloseData(data: InitialValues): Action
}

const initialState = { data: initial }

const symbiotes = {
  addCloseData: (state: State, data: InitialValues) => ({
    ...state,
    data,
  }),
}

const { actions, reducer } = createSymbiote<State, Actions>(
  initialState,
  symbiotes,
  'manager/add-closeData',
)

export { State, reducer, Actions, actions }
