import { createFetchingRedux, FetchingState } from 'redux-clear'

type State = FetchingState

const { actions, reducer } = createFetchingRedux(
  'claim/change-corporate-status',
)

export { actions, reducer, State }
