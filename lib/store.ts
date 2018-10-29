import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {
  reducer as loginReducer,
  State as LoginState,
} from '@app/features/login'

import {
  reducer as quotasReducer,
  State as QuotasState,
} from '@app/features/quotas'

import {
  reducer as transferReducer,
  State as TransferState,
} from '@app/features/transfer'

import ApiClient from './api/ApiClient'
import ApiClientFactory from './api/ApiClientFactory'
import { unauthorizedMiddleware } from './unauthorizedMiddleware'

export interface State {
  login: LoginState,
  quotas: QuotasState
  transfer: TransferState
}

const reducer = combineReducers({
  login: loginReducer,
  quotas: quotasReducer,
  transfer: transferReducer,
})

export interface ExtraArgs {
  api: ApiClient
}

export const initializeStore = (initialState?: State) =>
  createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(
      unauthorizedMiddleware,
      thunk.withExtraArgument({
        api: ApiClientFactory.getApiClient(),
      } as ExtraArgs),
    )),
  )
