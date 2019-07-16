import { FetchingState, createClearRedux } from 'redux-clear'

type State = FetchingState

const { actions, reducer } = createClearRedux(
  {
    set: () => (query: string) => query,
  },
  {},
  'browser-query',
)

export { actions, reducer, State }
