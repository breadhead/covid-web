import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { chooseActions, listActions } from './reducers'

export const fetchDoctors = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  dispatch(listActions.request())
  try {
    const doctors = await api.doctors()
    dispatch(listActions.success(doctors))
  } catch (error) {
    dispatch(listActions.error(error.message))
    throw error
  }
}

export const chooseDoctor = data => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  dispatch(chooseActions.request())
  try {
    await api.chooseDoctor(data)
    dispatch(chooseActions.success())
  } catch (error) {
    dispatch(chooseActions.error(error.message))
    throw error
  }
}
