import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

interface State {
  count: number
}

interface Actions {
  setCount(count: number): Action
}

const initialState: State = {
  count: 0,
}

const { actions, reducer } = createSymbiote<State, Actions>(
  initialState,
  {
    setCount: (_, count: number) => {
      return {
        count,
      }
    },
  },
  'count',
)

export { State, reducer, Actions, actions }
