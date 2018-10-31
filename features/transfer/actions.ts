import { QuotaTransferRequest } from '@app/lib/api/request/QuotaTransfer'
import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { actions } from './reducer'

export const transfer = (quotaTransferRequest: QuotaTransferRequest) => async (
  dispatch: Dispatch<any>,
  _: () => State,
  { api }: ExtraArgs,
) => {

  try {
    dispatch(actions.request())
    const result = await api.transfer(quotaTransferRequest)

    return dispatch(actions.success(result))
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }

}
