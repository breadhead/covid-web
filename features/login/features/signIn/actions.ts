import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { actions as modalActions } from '@app/features/common/modal/reducer'

import { actions as userActions, currentUser } from '../user'
import { setCookie } from './helpers/setAuthToken'
import { actions } from './reducer'
import { showIntercom } from '../../../landing/features/request-chat/showIntercom'

import { updateRequestFormData } from '@app/features/landing/features/request/reducer/actions'
import { setUserEmailLocalStorage } from './userEmailLocalStorage'

export const loginAction = (username: string, password: string) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  try {
    dispatch(actions.request())
    const { token } = await api.login(username, password)
    setUserEmailLocalStorage(username)

    setCookie(token)
    dispatch(userActions.setToken(token))
    dispatch(modalActions.close())
    await dispatch(currentUser())
    await dispatch(updateRequestFormData())

    showIntercom()
    return dispatch(actions.success(token))
  } catch (error) {
    const { message, fields, code } = error.response.data

    dispatch(actions.error(error.message))
    dispatch(actions.signInError({ message, fields, code }))
    throw error
  }
}
