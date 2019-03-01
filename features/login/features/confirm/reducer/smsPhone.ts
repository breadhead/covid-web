import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

interface State {
  phone: string
}

interface Actions {
  addPhone(phone: string): Action
}

const initialState = {
  phone: '',
}

const symbiotes = {
  addPhone: (state: State, phone: string) => ({ ...state, phone }),
}

const { actions, reducer } = createSymbiote<State, Actions>(
  initialState,
  symbiotes,
  'save-number',
)

export { State, reducer, Actions, actions }
