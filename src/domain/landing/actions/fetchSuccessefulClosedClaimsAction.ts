import { Dispatch } from 'react'
import { ExtraArgs, State } from '@app/lib/store'
import { actions } from '../redux/parts/fetchSuccessefullClosedClaims'

export const fetchSuccessefulClosedClaimsAction = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs
) => {
  const api = getApi(getState)
  const count = await api.fetchSuccessefulClosedClaims()
  return dispatch(actions.setCount(count))
}
