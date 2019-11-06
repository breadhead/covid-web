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
    dispatch(actions.request())

    try {
      await api.changeCorporateStatus(claimId, newStatus)

      await dispatch(fetchClaim(claimId))
      dispatch(actions.success())
    } catch (error) {
      dispatch(actions.failure(error.message))
      throw error
    }
  }
