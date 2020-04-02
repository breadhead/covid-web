import {
  applyMiddleware,
  combineReducers,
  createStore,
  Store as ReduxStore,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import windowSize, { REDUCER_KEY } from 'redux-windowsize'

export type Store = ReduxStore<State>


import {
  notFoundMiddleware,
  reducer as notFoundReducer,
  State as NotFoundState,
} from '@app/features/main/notFound'

import {
  reducer as modalReducer,
  State as ModalState,
} from '@app/features/common/modal'

import {
  getToken,
  reducer as loginReducer,
  State as LoginState,
  unauthorizedMiddleware,
} from '@app/features/login'

import {
  reducer as sendFeedbackReducer,
  State as SendFeedbackState,
} from '@app/features/landing/features/contacts/organisms/FeedbackForm'

import {
  requestFormReducer,
  RequestFormReducerState,
} from '@app/features/landing/features/request/reducer'

import ApiClient from './api/ApiClient'
import factory from './api/apiFactory'

export interface State {
  modal: ModalState
  feedback: SendFeedbackState
  notFound: NotFoundState
  login: LoginState
  requestForm: RequestFormReducerState
}

const reducer = combineReducers({
  requestForm: requestFormReducer,
  login: loginReducer,
  modal: modalReducer,
  [REDUCER_KEY]: windowSize,
  feedback: sendFeedbackReducer,
  notFound: notFoundReducer,
} as any)

export interface ExtraArgs {
  api: ApiClient
  getApi: (getState: () => State) => ApiClient
}

export const initializeStore = (initialState?: State) =>
  createStore(
    reducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        unauthorizedMiddleware,
        notFoundMiddleware,
        thunk.withExtraArgument({
          getApi: getState => factory(getToken(getState())),
        } as ExtraArgs),
      ),
    ),
  )
