import { Dispatch } from 'react'

import { fetchClaim } from '@app/features/common/consultation'
import { ExtraArgs, State } from '@app/lib/store'

import { CorporateStatus } from '../enums/CorporateStatus'
import { actions } from '../redux/parts/changeCorporateStatus'

export const changeCorporateStatus = (
  claimId: string,
  newStatus: CorporateStatus,
) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  dispatch((actions as any).request())

  try {
    await api.changeCorporateStatus(claimId, newStatus)

    await dispatch(fetchClaim(claimId))
    dispatch((actions as any).success())
  } catch (error) {
    dispatch((actions as any).failure(error.message))
    throw error
  }
}
