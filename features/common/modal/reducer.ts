import { ClearAction, createClearRedux } from 'redux-clear';

export const EMPTY_MODAL = 'empty';

type State = string;

interface Actions {
  open: ClearAction<[string]>;
  close: ClearAction;
}

const { actions, reducer } = createClearRedux<State, Actions>(
  {
    open: () => (key) => key,
    close: () => () => EMPTY_MODAL,
  },
  EMPTY_MODAL,
  'modals',
);

export { reducer, actions };
export type { State, Actions };
