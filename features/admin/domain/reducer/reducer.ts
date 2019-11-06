import { errorSymbiote, requestSymbiote } from '@app/lib/symbioteFactory'
import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'
import { Story } from '@app/models/Story';

interface State {
  stories: Story[] | null
  fetching: boolean
  error: false | string
}

const initialState = {
  stories: null,
  fetching: false,
  error: false,
} as State

interface Actions {
  request(): Action
  addStories(stories: Story[]): Action
  error(error: string): Action
}

const { actions, reducer } = createSymbiote<State, Actions>(
  initialState,
  {
    request: requestSymbiote,
    addStories: (state, stories) => ({
      ...state,
      fetching: false,
      error: false,
      stories,
    }),
    error: errorSymbiote,
  },
  'admin/stories',
)

export { State, reducer, Actions, actions }
