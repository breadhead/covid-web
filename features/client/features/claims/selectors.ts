import { State } from '@app/lib/store'

export const getClaims = (state: State) => state.client.claims.claims

export const getLoaded = (state: State) =>
  state.client.claims.loaded &&
  !state.client.claims.fetching &&
  !state.client.claims.error
