import { sortBy } from 'lodash'
import { createSelector } from 'reselect'

import { State } from '@app/lib/store'
import { ChatMessage } from '@app/models/Claim/ChatMessage'

const getUnsortedMessages = (state: State) => state.client.chat.messages
export const getMessages = createSelector(
  getUnsortedMessages,
  messages =>
    sortBy(messages, (message: ChatMessage) => message.date.valueOf()),
)

export const getLoaded = (state: State) => state.client.chat.loaded
