import { ExtraArgs, State } from '@app/lib/store'
import { Quota } from '@app/models/Quota/Quota'
import { Dispatch } from 'redux'
import { actions } from './reducer'

export const createQuota = (quotaFields: Quota) => async (
  dispatch: Dispatch<any>,
  _: () => State,
  { api }: ExtraArgs,
) => {
  try {
    dispatch(actions.request())
    const quota = await api.createQuota(quotaFields)
    return dispatch(actions.success(quota))
  } catch (error) {
    return dispatch(actions.error(error.message))
  }

}
