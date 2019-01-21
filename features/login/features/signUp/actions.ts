import { actions as modalActions } from '@app/features/common/modal'
import { setCookie } from '@app/features/login/features/signIn/helpers/setAuthToken'
import { actions } from '@app/features/login/features/signIn/reducer'
import { actions as userActions } from '@app/features/login/features/user'
import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import redirectUser, { Condition } from '../redirect'

export const signUp = (
  login: string,
  password: string,
  confirm: string,
) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  try {
    const { token, roles } = await api.signUp(login, password, confirm)

    setCookie(token)
    dispatch(userActions.setToken(token))
    dispatch(modalActions.close())

    redirectUser(roles, Condition.signUp)

    return dispatch(actions.success(token))
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}
