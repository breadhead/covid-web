import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { BACK_URL } from './config'

import {
  reducer as loginReducer,
  State as LoginState,
} from '@app/features/login'

import ApiClient from './api/ApiClient'
import RealApiClient from './api/RealApiClient'

export interface State {
  login: LoginState
}

const reducer = combineReducers({
  login: loginReducer,
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
