import { Dispatch } from 'redux'

import { ExtraArgs, State } from '@app/lib/store'
import { ChatMessage } from '@app/models/Claim/ChatMessage'

import { actions } from './reducer'

export const send = (claimId: string, message: ChatMessage) => async (
  dispatch: Dispatch<any>,
  _: () => State,
  { api }: ExtraArgs,
) => {
  dispatch(actions.request())
  try {
    const sentMessage = await api.sendChatMessage(claimId, message)
    return dispatch(actions.sent(sentMessage))
  } catch (error) {
    return dispatch(actions.error(error.message))
  }
}

export const fetch = (claimId: string) => async (
  dispatch: Dispatch<any>,
  _: () => State,
  { api }: ExtraArgs,
) => {
  dispatch(actions.request())
  try {
    const messages = await api.messages(claimId)
    return dispatch(actions.success(messages))
  } catch (error) {
    return dispatch(actions.error(error.message))
  }
}
