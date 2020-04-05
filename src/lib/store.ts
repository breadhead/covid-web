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
