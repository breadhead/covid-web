import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {
  reducer as loginReducer,
  State as LoginState,
  unauthorizedMiddleware,
} from '@app/features/login'

import {
  reducer as quotasReducer,
  State as QuotasState,
} from '@app/features/quotas'

import {
  reducer as transferReducer,
  State as TransferState,
} from '@app/features/transfer'

import {
  reducer as historyReducer,
  State as HistoryState,
} from '@app/features/history'

import {
  reducer as quotaReducer,
  State as QuotaState,
} from '@app/features/quota'

import ApiClient from './api/ApiClient'
import ApiClientFactory from './api/ApiClientFactory'

export interface State {
  login: LoginState
  quotas: QuotasState
  quota: QuotaState
  transfer: TransferState
  history: HistoryState,
}

const reducer = combineReducers({
  login: loginReducer,
  quotas: quotasReducer,
  quota: quotaReducer,
  transfer: transferReducer,
  history: historyReducer,
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
