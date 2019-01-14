import { Dispatch } from 'redux'

import { fetchSituationClaim } from '@app/features/client/features/editClaim'
import { fetchShortClaim } from '@app/features/client/features/newClaim'
import { ExtraArgs, State } from '@app/lib/store'

import { actions } from './reducer'

export const fetchQuotaClaim = (id: string) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  dispatch(actions.request())
  try {
    const [quotaClaim, mainInfo, questionsClaim] = await Promise.all([
      api.quotaClaim(id),
      api.mainInfoClaim(id),
      api.questionsClaim(id),
    ])
    dispatch(actions.success(quotaClaim, mainInfo, questionsClaim))
    return { quotaClaim, mainInfo, questionsClaim }
  } catch (error) {
    dispatch(actions.error(error.message))
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
