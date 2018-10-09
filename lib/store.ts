import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {
  State as ExampleState,
  reducer as exampleReducer,
} from '@app/features/examples'

import RealApiClient from './api/RealApiClient'
import ApiClient from './api/ApiClient'

export interface State {
  example: ExampleState
}

const reducer = combineReducers({
  example: exampleReducer,
})

export type StateGetter = () => State

export interface ExtraArgs {
  api: ApiClient
}

export const initializeStore = (initialState?: State) =>
  createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(
      thunk.withExtraArgument({
        api: new RealApiClient()
      } as ExtraArgs),
    )),
  )
