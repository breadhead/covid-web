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
  reducer as claimReducer,
  State as ClaimState,
} from '@app/features/common/claim'

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
  reducer as chatReducer,
  State as ChatState,
} from '@app/features/common/chat'

import {
  reducer as consultationReducer,
  State as ConsultationState,
} from '@app/features/common/consultation'

import {
  reducer as managerReducer,
  State as ManagerState,
} from '@app/features/manager'

import {
  reducer as doctorReducer,
  State as DoctorState,
} from '@app/features/doctor'

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
  clientClaimsReducer,
  ClientClaimsState,
} from '@app/features/common/consultation'

import ApiClient from './api/ApiClient'
import factory from './api/apiFactory'

import { domainReducer } from '@front/domain/redux/domainReducer'
import { DomainState } from '@front/domain/redux/DomainState'

export interface State {
  domain: DomainState
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
  manager: ManagerState
  chat: ChatState
  consultation: ConsultationState
  feedback: SendFeedbackState
  doctor: DoctorState
  notFound: NotFoundState
  claim: ClaimState
  clientClaim: ClientClaimsState
  landing: LandingState
}

const reducer = combineReducers({
  domain: domainReducer,
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
  manager: managerReducer,
  chat: chatReducer,
  consultation: consultationReducer,
  feedback: sendFeedbackReducer,
  doctor: doctorReducer,
  notFound: notFoundReducer,
  claim: claimReducer,
  landing: landingReducer,
  clientClaim: clientClaimsReducer,
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
