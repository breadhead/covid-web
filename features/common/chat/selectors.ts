import { sortBy } from 'lodash'
import { createSelector } from 'reselect'

import { State } from '@app/lib/store'
import { ChatMessage } from '@app/models/Claim/ChatMessage'
import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { Role } from '@app/models/Users/User'

const getUnsortedMessages = (state: State) => state.chat.messages

export const getMessages = createSelector(
  getUnsortedMessages,
  messages =>
    sortBy(messages, (message: ChatMessage) => message.date.valueOf()),
)

export const getLoaded = (state: State) => state.chat.loaded

export const isMuted = (state: State) =>
  (state.login.user.roles.includes(Role.Client) &&
    state.consultation.claimData.mainInfo!.status === ClaimStatus.Closed) ||
  (state.login.user.roles.includes(Role.Client) &&
    state.consultation.claimData.mainInfo!.status ===
      ClaimStatus.ClosedWithoutAnswer) ||
  (state.login.user.roles.includes(Role.Client) &&
    state.consultation.claimData.mainInfo!.status === ClaimStatus.Denied)
