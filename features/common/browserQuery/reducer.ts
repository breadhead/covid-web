import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'

type State = object

interface Actions {
  set(query: State): Action
}

const { actions, reducer } = createSymbiote<State, Actions>(
  {},
  {
    set: (_, query) => query,
  },
  'browser/query',
)

export { State, reducer, Actions, actions }
