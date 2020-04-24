import { State } from '@app/src/lib/store';

export const selectTrustPartners = (state: State) =>
  state.partners.list?.filter(({ isATrust }) => isATrust);
