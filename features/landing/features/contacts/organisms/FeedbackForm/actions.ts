import { ExtraArgs, State } from '@app/lib/store'

import { SendFeedbackRequest } from '@app/lib/api/request/SendFeedback'
import { Dispatch } from 'redux'
import { actions } from './reducer'

export const sendFeedback = (feedbackFields: SendFeedbackRequest) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  try {
    dispatch(actions.request())
    await api.sendFeedback(feedbackFields)
    return dispatch(actions.success())
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}