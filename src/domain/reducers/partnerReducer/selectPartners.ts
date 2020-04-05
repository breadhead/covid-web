import { State } from '@app/src/lib/store';

export const selectPartnersForPartnerPage = (state: State) =>
    state.partners.list;

export const selectPartnersForMainPage = (state: State) =>
  state.partners.mainPageList;

export const selectPartnersForHospitalsPage = (state: State) =>
  state.partners.hospitalsPageList;

export const selectPartnersForInfoPage = (state: State) =>
    state.partners.hospitalsPageList;
