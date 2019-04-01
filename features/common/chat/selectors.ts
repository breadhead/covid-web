import { sortBy } from 'lodash'
import { createSelector } from 'reselect'

import { State } from '@app/lib/store'
import { ChatMessage } from '@app/models/Claim/ChatMessage'
import { Role } from '@app/models/Users/User'
import { tryOr } from '@front/helpers/tryOr'
import { mutedStatuses } from './page/config'

const getUnsortedMessages = (state: State) => state.chat.messages

export const getMessages = createSelector(
  getUnsortedMessages,
  messages =>
    sortBy(messages, (message: ChatMessage) => message.date.valueOf()),
)

export const getLoaded = (state: State) => state.chat.loaded

export const isMuted = (state: State) =>
  tryOr(() => {
    const status = state.consultation.claimData.mainInfo!.status

    const isClient = state.login.user.roles.includes(Role.Client)
    const statusIsMuted = mutedStatuses.includes(status)

    return isClient && statusIsMuted
  }, false)
