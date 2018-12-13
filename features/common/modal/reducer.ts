import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

export const EMPTY_MODAL = 'empty'

type State = string

interface Actions {
  open(modal: string): Action
  close(): Action
}

const { actions, reducer } = createSymbiote<State, Actions>(
  EMPTY_MODAL,
  {
    open: (_, modal) => modal,
    close: () => EMPTY_MODAL,
  },
  'modal',
)

export { State, reducer, Actions, actions }
