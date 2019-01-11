import { Dispatch } from 'redux'

import { ExtraArgs, State } from '@app/lib/store'

import { actions } from './reducer'

export const fetchClaim = (id: string) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  dispatch(actions.request())
  try {
    const [quotaClaim, situationClaim, shortClaim] = await Promise.all([
      api.quotaClaim(id),
      api.situationClaim(id),
      api.shortClaim(id),
    ])
    const claim = { quotaClaim, situationClaim, shortClaim }
    dispatch(actions.success(claim))
    return claim
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}
