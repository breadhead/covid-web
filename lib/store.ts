import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { BACK_URL } from './config'

import {
  reducer as loginReducer,
  State as LoginState,
} from '@app/features/login'

import {
  reducer as quotasReducer,
  State as QuotasState,
} from '@app/features/quotasPage'

import {
  reducer as quotaReducer,
  State as QuotaState,
} from '@app/features/quotaPage'

import ApiClient from './api/ApiClient'
import RealApiClient from './api/RealApiClient'

export interface State {
  login: LoginState,
  quotas: QuotasState,
  quota: QuotaState
}

const reducer = combineReducers({
  login: loginReducer,
  quotas: quotasReducer,
  quota: quotaReducer,
})

export interface ExtraArgs {
  api: ApiClient
}

export const initializeStore = (initialState?: State) =>
  createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(
      thunk.withExtraArgument({
        api: new RealApiClient(BACK_URL),
      } as ExtraArgs),
    )),
  )
