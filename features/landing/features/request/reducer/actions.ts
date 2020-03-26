import Router from 'next/router'
import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { actions } from './reducer'
import { setFormRequestFinished } from '../organisms/RequestForm/localStorage'

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
    Router.push('/request/chat')
    return dispatch(actions.success(requestFormData))
  } catch (error) {
    return dispatch(actions.error(error.message))
  }
}
