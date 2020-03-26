import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { actions } from './reducer'

export const saveRequestFormData = (requestFormData: any) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  try {
    dispatch(actions.request())
    dispatch(actions.success(requestFormData))
    await api.saveCoronaRequestForm(requestFormData)
  } catch (error) {
    return dispatch(actions.error(error.message))
  }
}
