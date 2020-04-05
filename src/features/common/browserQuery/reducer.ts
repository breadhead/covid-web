import { ClearAction, createClearRedux } from 'redux-clear';

type State = object;

interface Actions {
  set: ClearAction<[object]>;
}

const { actions, reducer } = createClearRedux<State, Actions>(
  {
    set: () => (query) => query,
  },
  {},
  'browser-query',
);

export { reducer, actions };
export type { State, Actions };
