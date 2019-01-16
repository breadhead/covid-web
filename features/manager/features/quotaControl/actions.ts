import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { actions } from './reducer'

export const fetchClaimBoardCard = (id: string) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  actions.request()
  try {
    const claimBoardCard = await api.getClaimBoardCard(id)

    dispatch(actions.success(claimBoardCard))
    return claimBoardCard
  } catch (e) {
    dispatch(actions.error(e.message))

    throw e
  }
}
