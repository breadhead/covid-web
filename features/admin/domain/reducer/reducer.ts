import { errorSymbiote, requestSymbiote } from '@app/lib/symbioteFactory'
import { Action } from 'redux'
import { createSymbiote } from 'redux-symbiote'
import { Story } from '@app/models/Story'
import { StoryEnum } from '@app/models/Story/StoryEnum'

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
  updateStatus(id: string, status: StoryEnum): Action
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
    updateStatus: (state, id, status) => {
      const newStories =
        state.stories &&
        state.stories.map(story =>
          story.id === id ? { ...story, status } : story,
        )

      return {
        ...state,
        stories: newStories,
      }
    },
    error: errorSymbiote,
  },
  'admin/stories',
)

export { State, reducer, Actions, actions }
