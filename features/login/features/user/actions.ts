import { actions } from '@app/features/login/features/signIn/reducer'
import { actions as userActions } from '@app/features/login/features/user'
import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'

export const currentUser = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  try {
    dispatch(actions.request())
    const { roles } = await api.currentUser()

    dispatch(userActions.setUser(roles))
    return { roles }
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}