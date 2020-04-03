import {
  applyMiddleware,
  combineReducers,
  createStore,
  Store as ReduxStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import windowSize, { REDUCER_KEY } from 'redux-windowsize';

export type Store = ReduxStore<State>;

import {
  notFoundMiddleware,
  reducer as notFoundReducer,
  State as NotFoundState,
} from '@app/features/main/notFound';
import {
  reducer as modalReducer,
  State as ModalState,
} from '@app/features/common/modal';
import {
  getToken,
  reducer as loginReducer,
  State as LoginState,
  unauthorizedMiddleware,
} from '@app/features/login';
import {
  reducer as sendFeedbackReducer,
  State as SendFeedbackState,
} from '@app/features/landing/features/contacts/organisms/FeedbackForm';
import {
  requestFormReducer,
  RequestFormReducerState,
} from '@app/features/landing/features/request/reducer';
import {
  airtableReducer,
  AirtableState,
} from '@app/features/common/airtableReducer';
import {
  reducer as browserQueryReducer,
  State as BrowserQueryState,
} from '@app/features/common/browserQuery';
import {
  reducer as PartnersReducer,
  State as PartnersState,
} from '@app/features/common/partnerReducer/reducer';

import ApiClient from './api/ApiClient';
import factory from './api/apiFactory';

export interface State {
  browserQuery: BrowserQueryState;
  modal: ModalState;
  feedback: SendFeedbackState;
  notFound: NotFoundState;
  login: LoginState;
  requestForm: RequestFormReducerState;
  partners: PartnersState;
  airtable: AirtableState;
}

const reducer = combineReducers({
  browserQuery: browserQueryReducer,
  requestForm: requestFormReducer,
  airtable: airtableReducer,
  login: loginReducer,
  modal: modalReducer,
  [REDUCER_KEY]: windowSize,
  feedback: sendFeedbackReducer,
  notFound: notFoundReducer,
  partners: PartnersReducer,
} as any);

export interface ExtraArgs {
  api: ApiClient;
  getApi: (getState: () => State) => ApiClient;
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
          getApi: (getState) => factory(getToken(getState())),
        } as ExtraArgs),
      ),
    ),
  );
