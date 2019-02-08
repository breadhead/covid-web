import { ClearAction, createClearRedux } from 'redux-clear'

type State = object

interface Actions {
  set: ClearAction<[object]>
}

const { actions, reducer } = createClearRedux<State, Actions>(
  {
    set: () => query => query,
  },
  {},
  'browser-query',
)

export { State, reducer, Actions, actions }
