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
    const sendedMessage = await api.sendChatMessage(claimId, message)
    return dispatch(actions.sended(sendedMessage))
  } catch (error) {
    return dispatch(actions.error(error.message))
  }
}
