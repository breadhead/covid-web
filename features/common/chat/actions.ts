import { Dispatch } from 'redux'

import { ExtraArgs, State } from '@app/lib/store'
import { ChatMessage } from '@app/models/Claim/ChatMessage'

import { actions } from './reducer'

export const send = (claimId: string, message: ChatMessage) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  dispatch(actions.request())
  try {
    const sentMessage = await api.sendChatMessage(claimId, message)
    return dispatch(actions.sent(sentMessage))
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}

export const fetch = (claimId: string) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  dispatch(actions.request())
  try {
    const messages = await api.messages(claimId)
    return dispatch(actions.success(messages))
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}
