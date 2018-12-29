import { QuotaCreateRequest } from '@app/lib/api/request/Quota'
import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { actions } from './reducer'

export const createQuota = (quotaFields: QuotaCreateRequest) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  try {
    dispatch(actions.request())
    const quota = await api.createQuota(quotaFields)
    return dispatch(actions.success(quota.id))
  } catch (error) {
    return dispatch(actions.error(error.message))
  }
}
