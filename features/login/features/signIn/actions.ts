import { Role } from '@app/lib/api/ApiClient'
import { ExtraArgs, State } from '@app/lib/store'
import Router from 'next/router'
import { Dispatch } from 'redux'
import { setAuthToken } from './helpers/setAuthToken'
import { actions } from './reducer'

export const login = (username: string, password: string) => async (
  dispatch: Dispatch<any>,
  _: () => State,
  { api }: ExtraArgs,
) => {
  try {
    dispatch(actions.request())
    const { token, roles } = await api.login(username, password)
    setAuthToken(token, api)

    if (roles.includes(Role.Admin)) {
      Router.push('/admin/quotas')
    } else if (roles.includes(Role.Client)) {
      Router.push('/client')
    } else if (roles.includes(Role.CaseManager)) {
      Router.push('/manager')
    } else if (roles.includes(Role.Doctor)) {
      Router.push('/doctor')
    }

    return dispatch(actions.success(token))
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}
