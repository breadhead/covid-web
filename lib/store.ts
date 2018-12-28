import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import windowSize, { REDUCER_KEY } from 'redux-windowsize'

import {
  reducer as clientReducer,
  State as ClientState,
} from '@app/features/client'

import {
  reducer as createQuotaReducer,
  State as CreateQuotaState,
} from '@app/features/admin/features/createQuota'

import {
  reducer as editQuotaReducer,
  State as EditQuotaState,
} from '@app/features/admin/features/editQuota'

import {
  reducer as quotasReducer,
  State as QuotasState,
} from '@app/features/admin/features/quotasList'

import {
  reducer as transferReducer,
  State as TransferState,
} from '@app/features/admin/features/transfer'

import {
  reducer as historyReducer,
  State as HistoryState,
} from '@app/features/admin/features/history'

import {
  reducer as quotaReducer,
  State as QuotaState,
} from '@app/features/admin/features/quota'

import {
  reducer as modalReducer,
  State as ModalState,
} from '@app/features/common/modal'

import {
  reducer as browserQueryReducer,
  State as BrowserQueryState,
} from '@app/features/common/browserQuery'

import {
  reducer as loginReducer,
  State as LoginState,
  unauthorizedMiddleware,
} from '@app/features/login'

import ApiClient from './api/ApiClient'
import ApiClientFactory from './api/ApiClientFactory'

export interface State {
  login: LoginState
  quotas: QuotasState
  createQuota: CreateQuotaState
  editQuota: EditQuotaState
  quota: QuotaState
  transfer: TransferState
  history: HistoryState
  modal: ModalState
  client: ClientState
  browserQuery: BrowserQueryState
}

const reducer = combineReducers({
  login: loginReducer,
  quotas: quotasReducer,
  createQuota: createQuotaReducer,
  editQuota: editQuotaReducer,
  quota: quotaReducer,
  transfer: transferReducer,
  history: historyReducer,
  modal: modalReducer,
  [REDUCER_KEY]: windowSize,
  client: clientReducer,
  browserQuery: browserQueryReducer,
} as any)

export interface ExtraArgs {
  api: ApiClient
}

export const initializeStore = (initialState?: State) =>
  createStore(
    reducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        unauthorizedMiddleware,
        thunk.withExtraArgument({
          api: ApiClientFactory.getApiClient(),
        } as ExtraArgs),
      ),
    ),
  )
