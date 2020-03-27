import routes from '@app/routes'

import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { actions } from './reducer'
import { setFormRequestFinished } from '../organisms/RequestForm/localStorage'

const { Router } = routes

export const saveRequestFormData = (requestFormData: any) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  try {
    dispatch(actions.request())
    await api.saveCoronaRequestForm(requestFormData)
    setFormRequestFinished()
    dispatch(actions.success(requestFormData))
    Router.pushRoute('/request/chat')
  } catch (error) {
    return dispatch(actions.error(error.message))
  }
}
