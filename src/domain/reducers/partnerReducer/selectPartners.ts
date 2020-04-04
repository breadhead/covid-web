import { State } from '@app/src/lib/store';

export const selectPartnersForMainPage = (state: State) =>
  state.partners.mainPageList;

export const selectPartnersForPartnerPage = (state: State) =>
  state.partners.partnersPageList;