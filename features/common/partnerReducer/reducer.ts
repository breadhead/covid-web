import { Action } from 'redux';

import { Partner } from '@app/models/sanity/Partner';
import {
  PageType,
  PartnersType,
} from '@app/features/landing/features/partners/organisms/PartnersList/config';
import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory';

interface State extends FetchingState {
  list: Partner[];
  infoPartners: Partner[];
  infrastructurePartners: Partner[];
  partnersPageList: Partner[];
  mainPageList: Partner[];
}

interface Actions extends FetchingActions {
  success(partners: any): Action;
}

const initialState = createInitialState({
  list: [],
  infoPartners: [],
  infrastructurePartners: [],
  partnersPageList: [],
  mainPageList: [],
});

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, partnersFromSanity: Partner[]) => {
    return {
      ...state,
      list: partnersFromSanity,
      infoPartners: partnersFromSanity.filter(
        (item) => item.type === PartnersType.InfoPartner,
      ),
      infrastructurePartners: partnersFromSanity.filter(
        (item) => item.type === PartnersType.InfrastructurePartner,
      ),
      partnersPageList: partnersFromSanity.filter((item) =>
        item.pageToShow.includes(PageType.Partners),
      ),
      mainPageList: partnersFromSanity.filter((item) =>
        item.pageToShow.includes(PageType.Main),
      ),
    };
  },
  'getPartnersFromSanity',
);

export { reducer, actions };
export type { State, Actions };
