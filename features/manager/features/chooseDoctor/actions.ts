import { fetchQuotaClaim } from '@app/features/common/consultation'
import { BindQuotaRequest } from '@app/lib/api/request/BindQuotaRequest'
import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { actions } from './reducer'

export const fetchDoctors = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  dispatch(actions.request())
  try {
    await api.chooseDoctor(data)
    await dispatch(fetchQuotaClaim(data.claimId))
    dispatch(actions.success())
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}
