import { QuotaEditRequest } from '@app/lib/api/request/QuotaEdit'
import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { actions } from './reducer'

export const editQuota = (quotaFields: QuotaEditRequest) => async (
  dispatch: Dispatch<any>,
  _: () => State,
  { api }: ExtraArgs,
) => {
  try {
    dispatch(actions.request())
    const quota = await api.createQuota(quotaFields)
    return dispatch(actions.success(quota.id))
  } catch (error) {
    return dispatch(actions.error(error.message))
  }

}
