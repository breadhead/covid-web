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
} from '@app/src/features/common/notFound';
import {
  reducer as modalReducer,
  State as ModalState,
} from '@app/src/features/common/modal';
import {
  reducer as loginReducer,
  State as LoginState,
} from '@app/src/domain/reducers/loginReducer/reducer';
import {
  reducer as sendFeedbackReducer,
  State as SendFeedbackState,
} from '@app/src/features/landing/features/contacts/organisms/FeedbackForm';
import {
  requestFormReducer,
  RequestFormReducerState,
} from '@app/src/domain/reducers/requestConsultationReducer';
import {
  reducer as browserQueryReducer,
  State as BrowserQueryState,
} from '@app/src/features/common/browserQuery';
import {
  reducer as partnerReducer,
  State as PartnerState,
} from '@app/src/domain/reducers/partnerReducer/reducer';
import {
  reducer as expertReducer,
  State as ExpertState,
} from '@app/src/domain/reducers/expertReducer/reducer';
import {
  reducer as expertBoardReducer,
  State as ExpertBoardState,
} from '@app/src/domain/reducers/expertBoardReducer/reducer';
import {
  reducer as paymentWidgetReducer,
  State as PaymentWidgetState,
} from '@app/src/domain/reducers/paymentWidgetReducer/';
import * as tags from '@app/src/domain/reducers/tagsReducer';
import * as news from '@app/src/domain/reducers/newsReducer';
import * as articles from '@app/src/domain/reducers/articlesReducer';
import * as resources from '@app/src/domain/reducers/resourcesReducer';
import * as hospitals from '@app/src/domain/reducers/hospitalsReducer';

import ApiClient from './api/ApiClient';
import factory from './api/apiFactory';
import { getToken } from '../domain/reducers/userReducer';
import { unauthorizedMiddleware } from '../domain/reducers/signInReducer/middleware';

export interface State {
  browserQuery: BrowserQueryState;
  modal: ModalState;
  feedback: SendFeedbackState;
  notFound: NotFoundState;
  login: LoginState;
  requestForm: RequestFormReducerState;
  partners: PartnerState;
  experts: ExpertState;
  expertBoard: ExpertBoardState;
  paymentWidget: PaymentWidgetState;
  tags: tags.State;
  news: news.State;
  articles: articles.State;
  resources: resources.State;
  hospitals: hospitals.State;
}

const reducer = combineReducers({
  browserQuery: browserQueryReducer,
  requestForm: requestFormReducer,
  login: loginReducer,
  modal: modalReducer,
  [REDUCER_KEY]: windowSize,
  feedback: sendFeedbackReducer,
  notFound: notFoundReducer,
  partners: partnerReducer,
  experts: expertReducer,
  expertBoard: expertBoardReducer,
  paymentWidget: paymentWidgetReducer,
  tags: tags.reducer,
  news: news.reducer,
  articles: articles.reducer,
  resources: resources.reducer,
  hospitals: hospitals.reducer,
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
