import { Action } from 'redux'

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/lib/symbioteFactory'
import { ChatMessage } from '@app/models/Claim/ChatMessage'

interface State extends FetchingState {
  messages: ChatMessage[]
  loaded: boolean
}

interface Actions extends FetchingActions {
  success(messages: ChatMessage[]): Action
  sended(message: ChatMessage): Action
}

const initialState = createInitialState({
  messages: [],
  loaded: false,
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, messages: ChatMessage[]) => ({
    ...state,
    messages,
    loaded: true,
  }),
  'client/new-claim',
  {
    sended: (state: State, message: ChatMessage) => ({
      ...state,
      messages: [
        ...state.messages.filter(({ id }) => id !== message.id),
        message,
      ],
      fetching: false,
      error: false,
    }),
  },
)

export { State, reducer, Actions, actions }
