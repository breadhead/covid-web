import { ExtraArgs, State } from '@app/lib/store'
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
    const { token } = await api.login(username, password)
    setAuthToken(token, api)

    return dispatch(actions.success(token))
  } catch (error) {
    return dispatch(actions.error(error.message))
  }

}
