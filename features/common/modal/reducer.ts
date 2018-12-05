import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote/types'

enum ModalState { login = 'login', empty = '' }

type State = ModalState

const initialState = ModalState.empty as State

interface Actions {
  open(modal: ModalState): Action
  close(): Action
}

const { actions, reducer } = createSymbiote<State, Actions>(
  initialState,
  {
    open: (_, modal) => modal,
    close: () => ModalState.empty,
  },
  'modal',
)

export {
  State, reducer,
  Actions, actions,
}

/* import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

interface State {
  quotas: any[],
  fetching: boolean,
  error: false | string
}

const initialState = {
  quotas: [],
  fetching: false,
  error: false,
} as State

interface Actions {
  request(): Action
  success(quotas: any[]): Action
  error(error: string): Action
}

const { actions, reducer } = createSymbiote<State, Actions>(
  initialState,
  {
    request: (state) => ({
      ...state,
      fetching: true,
    }),
    success: (state, quotas) => ({
      ...state,
      fetching: false,
      error: false,
      quotas,
    }),
    error: (state, error) => ({
      ...state,
      fetching: false,
      error,
    }),
  },
  'quotas',
)

export {
  State, reducer,
  Actions, actions,
}
 */
