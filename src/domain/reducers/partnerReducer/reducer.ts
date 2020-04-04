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
  partnersPageList: Partner[];
  mainPageList: Partner[];
  hospitalsPageList: Partner[];
  helpPageList: Partner[];
}

interface Actions extends FetchingActions {
  success(partners: any): Action;
}

const initialState = createInitialState({
  list: [],
  partnersPageList: [],
  mainPageList: [],
  hospitalsPageList: [],
  helpPageList: [],
});

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, partnersFromSanity: Partner[]) => {
    return {
      ...state,
      list: partnersFromSanity,
      partnersPageList: partnersFromSanity.filter((item) =>
        item.pageToShow.includes(PageType.Partners),
      ),
      mainPageList: partnersFromSanity.filter((item) =>
        item.pageToShow.includes(PageType.Main),
      ),
      hospitalsPageList: partnersFromSanity.filter((item) =>
        item.pageToShow.includes(PageType.Hospitals),
      ),
      helpPageList: partnersFromSanity.filter((item) =>
        item.pageToShow.includes(PageType.Help),
      ),
    };
  },
  'getPartnersFromSanity',
);

export { reducer, actions };
export type { State, Actions };
