import routes from '@app/routes'

import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { actions } from './reducer'
import { setFormRequestFinished, setFormId, getFormId, resetFormId } from '../organisms/RequestForm/localStorage'
import { getUserEmailLocalStorage } from "@app/features/login/features/signIn/userEmailLocalStorage"

const { Router } = routes

export const saveRequestFormData = (requestFormData: any) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  try {


    dispatch(actions.request())
    const email = getUserEmailLocalStorage()
    const { id } = await api.saveCoronaRequestForm({ ...requestFormData, email })
    setFormId(id)
    setFormRequestFinished()
    Router.pushRoute('/request/chat')
    return dispatch(actions.success(requestFormData))
  } catch (error) {
    return dispatch(actions.error(error.message))
  }
}


export const updateRequestFormData = () => async (
  _dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  try {
    const formId = getFormId()
    const email = getUserEmailLocalStorage()
    if (formId) {
      await api.updateCoronaRequestForm({ id: formId, email: email })
      resetFormId()
    }
  } catch (error) {
    console.log("error", error)

  }
}