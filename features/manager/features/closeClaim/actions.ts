import { Dispatch } from 'redux'

import { fetchQuotaClaim } from '@app/features/common/consultation'
import { CloseClaimRequest } from '@app/lib/api/request/CloseClaimRequest'
import { ExtraArgs, State } from '@app/lib/store'

import { InitialValues } from './organisms/Modal/config'
import { actions as closeClaimActions } from './reducers/closeClaim'
import { actions as closeDataActions } from './reducers/closeData'

export const closeClaim = (closeClaimRequest: CloseClaimRequest) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  dispatch(closeClaimActions.request())
  try {
    await api.closeClaim(closeClaimRequest)
    await dispatch(fetchQuotaClaim(closeClaimRequest.id))
    dispatch(closeClaimActions.success())
  } catch (error) {
    dispatch(closeClaimActions.error(error.message))
    throw error
  }
}

export const saveCloseData = (values: InitialValues) => async (
  dispatch: Dispatch<any>,
) => {
  dispatch(closeDataActions.addCloseData(values))
}
