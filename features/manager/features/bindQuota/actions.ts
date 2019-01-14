import { fetchQuotaClaim } from '@app/features/common/consultation/actions'
import { BindQuotaRequest } from '@app/lib/api/request/BindQuotaRequest'
import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { actions } from './reducer'

export const bindQuota = (data: BindQuotaRequest) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  dispatch(actions.request())
  try {
    await api.bindQuota(data)
    await dispatch(fetchQuotaClaim(data.claimId))
    dispatch(actions.success())
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}
