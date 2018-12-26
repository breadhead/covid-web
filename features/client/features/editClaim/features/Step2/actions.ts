import { Dispatch } from 'redux'

import { ExtraArgs, State } from '@app/lib/store'

import { actions } from './reducer'

export const shortClaim = (id: string) => async (
  dispatch: Dispatch<any>,
  _: () => State,
  { api }: ExtraArgs,
) => {
  dispatch(actions.request())
  try {
    const claim = await api.shortClaim(id)
    dispatch(actions.success())
    return claim
  } catch (error) {
    return dispatch(actions.error(error.message))
  }
}
