import { QuotaTransferRequest } from '@app/lib/api/request/QuotaTransferRequest'
import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { actions } from './reducer'

export const transfer = (quotaTransferRequest: QuotaTransferRequest) => async (
  dispatch: Dispatch<any>,
  _: () => State,
  { api }: ExtraArgs,
) => {
  debugger
}
