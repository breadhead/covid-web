import { Action } from 'redux';

import { Partner } from '@app/src/domain/models/sanity/Partner';
import { PageType } from '@app/src/features/landing/features/partners/organisms/PartnersList/config';
import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/src/lib/symbioteFactory';

interface State extends FetchingState {
  list: Partner[];
  mainPageList: Partner[];
  hospitalsPageList: Partner[];
  infoPageList: Partner[];
}

interface Actions extends FetchingActions {
  success(partners: any): Action;
}

const initialState = createInitialState({
  list: [],
  mainPageList: [],
  hospitalsPageList: [],
  infoPageList: [],
});

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, partnersFromSanity: Partner[]) => {
    return {
      ...state,
      list: partnersFromSanity,
      mainPageList: partnersFromSanity.filter((item) =>
        item.pageToShow.includes(PageType.Main),
      ),
      hospitalsPageList: partnersFromSanity.filter((item) =>
        item.pageToShow.includes(PageType.Hospitals),
      ),
      infoPageList: partnersFromSanity.filter((item) =>
        item.pageToShow.includes(PageType.Info),
      ),
    };
  },
  'getPartnersFromSanity',
);

export { reducer, actions };
export type { State, Actions };
