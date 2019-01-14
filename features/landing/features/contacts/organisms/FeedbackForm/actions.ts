import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { actions } from './reducer'

export const sendFeedback = (feedbackFields: any) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  try {
    dispatch(actions.request())
    const feedback = await api.sendFeedback(feedbackFields)
    return dispatch(actions.success(feedback))
  } catch (error) {
    return dispatch(actions.error(error.message))
  }
}
