import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { actions } from './reducer'

export const createQuota = (credentials: any) => async (
  dispatch: Dispatch<any>,
  _: () => State,
  { api }: ExtraArgs,
) => {
  try {
    const quota = await api.createQuota(credentials)
    return dispatch(actions.success(quota.id))
  } catch (error) {
    return dispatch(actions.error(error.message))
  }

}
