import { createClearRedux, ClearAction } from 'redux-clear'

interface State {
  count: number
}

interface Actions {
  setCount: ClearAction<[number]>
}

const initialState: State = {
  count: 0,
}

const { actions, reducer } = createClearRedux<State, Actions>(
  {
    setCount: () => count => ({
      count,
    }),
  },
  initialState,
  'landing/count',
)

export { State, reducer, Actions, actions }
