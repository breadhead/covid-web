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
  reducer as landingReducer,
  State as LandingState,
} from '@app/src/domain/landing'

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
  reducer as browserQueryReducer,
  State as BrowserQueryState,
} from '@app/features/common/browserQuery'

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

import { domainReducer } from '@front/domain/redux/domainReducer'
import { DomainState } from '@front/domain/redux/DomainState'

export interface State {
  domain: DomainState
  modal: ModalState
  browserQuery: BrowserQueryState
  feedback: SendFeedbackState
  notFound: NotFoundState
  landing: LandingState
  login: LoginState
  requestForm: RequestFormReducerState
}

const reducer = combineReducers({
  requestForm: requestFormReducer,
  domain: domainReducer,
  login: loginReducer,
  modal: modalReducer,
  [REDUCER_KEY]: windowSize,
  browserQuery: browserQueryReducer,
  feedback: sendFeedbackReducer,
  notFound: notFoundReducer,
  landing: landingReducer,
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
