import { sortBy } from 'lodash'
import { createSelector } from 'reselect'

import { Role } from '@app/lib/api/ApiClient'
import { State } from '@app/lib/store'
import { ChatMessage } from '@app/models/Claim/ChatMessage'
import ClaimStatus from '@app/models/Claim/ClaimStatus'

const getUnsortedMessages = (state: State) => state.chat.messages

export const getMessages = createSelector(
  getUnsortedMessages,
  messages =>
    sortBy(messages, (message: ChatMessage) => message.date.valueOf()),
)

export const getLoaded = (state: State) => state.chat.loaded

export const isMuted = (state: State) =>
  state.login.user.roles.includes(Role.Client) &&
  state.consultation.claimData.mainInfo!.status === ClaimStatus.Closed
