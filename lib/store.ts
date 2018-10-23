import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {
  reducer as exampleReducer,
  State as ExampleState,
} from '@app/features/examples'

import {
  reducer as loginReducer,
  State as LoginState,
} from '@app/features/loginForm'

import ApiClient from './api/ApiClient'
import RealApiClient from './api/RealApiClient'

export interface State {
  example: ExampleState,
  login: LoginState
}

const reducer = combineReducers({
  example: exampleReducer,
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
        api: new RealApiClient(),
      } as ExtraArgs),
    )),
  )
