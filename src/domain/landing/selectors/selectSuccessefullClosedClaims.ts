import { State } from '@app/lib/store'

export const selectSuccessefullClosedClaims = (state: State) =>
  state.landing.fetchSuccessefull.count
