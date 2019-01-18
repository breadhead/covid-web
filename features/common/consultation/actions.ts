import { Dispatch } from 'redux'

import { fetchSituationClaim } from '@app/features/client/features/editClaim'
import { fetchShortClaim } from '@app/features/client/features/newClaim'
import { ExtraArgs, State } from '@app/lib/store'

import { actions as claimDataActions } from './reducers/claimData'
import { actions as nextStatusActions } from './reducers/nextStatus'
import { getClaimId } from './selectors'

export const fetchQuotaClaim = (id: string) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  dispatch(claimDataActions.request())
  try {
    const [quotaClaim, mainInfo, questionsClaim] = await Promise.all([
      api.quotaClaim(id),
      api.mainInfoClaim(id),
      api.questionsClaim(id),
    ])
    dispatch(claimDataActions.success(quotaClaim, mainInfo, questionsClaim))
    return { quotaClaim, mainInfo, questionsClaim }
  } catch (error) {
    dispatch(claimDataActions.error(error.message))
    throw error
  }
}

export const fetchClaim = (id: string) => async (dispatch: Dispatch<any>) => {
  const [
    shortClaim,
    situationClaim,
    { quotaClaim, mainInfo, questionsClaim },
  ] = await Promise.all([
    dispatch(fetchShortClaim(id) as any),
    dispatch(fetchSituationClaim(id) as any),
    dispatch(fetchQuotaClaim(id) as any),
  ])

  return {
    shortClaim,
    mainInfo,
    situationClaim,
    quotaClaim,
    questionsClaim,
  }
}

export const nextStatus = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  const claimId = getClaimId(getState())
  dispatch(nextStatusActions.request())
  try {
    await api.nextStatus(claimId!)
    await dispatch(fetchClaim(claimId!))
    dispatch(nextStatusActions.success())
  } catch (error) {
    dispatch(nextStatusActions.error(error.message))
    throw error
  }
}
