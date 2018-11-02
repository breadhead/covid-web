import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'
import { Quota } from '@app/models/Quota/Quota'
import { Action } from 'redux'

interface State extends FetchingState {
  quota?: Quota,
}

interface Actions extends FetchingActions {
  success(quota: Quota): Action
}

const initialState = createInitialState({
  error: false,
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, quota: Quota) => {
    return ({
      ...state,
      quota,
    })
  },
  'quotaForm',
)

export {
  State, reducer,
  Actions, actions,
}
