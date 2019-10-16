import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { actions } from './submitRatingAnswer'

export const submitRatingAnswerAction = (id: number, text: string) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  // dispatch(actions.request());
  try {
    await api.sendRatingQuestionAnswer(id, text)
    dispatch(actions.submitRatingAnswer(id, text))
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}
