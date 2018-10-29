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
} from '@app/features/quotasPage'

import ApiClient from './api/ApiClient'
import ApiClientFactory from './api/ApiClientFactory'

export interface State {
  login: LoginState,
  quotas: QuotasState
}

const reducer = combineReducers({
  login: loginReducer,
  quotas: quotasReducer,
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
        api: ApiClientFactory.getApiClient(),
      } as ExtraArgs),
    )),
  )
