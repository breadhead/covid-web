import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

export enum ModalState {
  mainLogin = 'mainLogin',
  mainSignUp = 'mainSignUp',
  mainSMS = 'mainSMS',
  adminSignUp = 'adminSignUp',
  adminLogin = 'adminLogin',
  empty = 'empty',
}

type State = ModalState
const initialState = ModalState.empty

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
