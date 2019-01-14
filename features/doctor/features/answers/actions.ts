import { Dispatch } from 'redux'

import { AnswerRequest } from '@app/lib/api/request/AnswerRequest'
import { ExtraArgs, State } from '@app/lib/store'

import { actions } from './reducer'

export const answerQuestions = (answerRequest: AnswerRequest) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) =>
  Promise.resolve(null)
    .then(() => dispatch(actions.request()))
    .then(() => getApi(getState))
    .then(api => api.answerQuestions(answerRequest))
    .then(() => dispatch(actions.success()))
    .catch(err => {
      dispatch(actions.error(err))
      throw err
    })
