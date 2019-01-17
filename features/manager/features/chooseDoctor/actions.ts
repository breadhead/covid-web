import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { actions } from './reducer'

export const fetchDoctors = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  dispatch(actions.request())
  try {
    const doctors = await api.doctors()
    dispatch(actions.success(doctors))
  } catch (error) {
    dispatch(actions.error(error.message))
    throw error
  }
}
