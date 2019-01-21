import { getClaimId } from '@app/features/common/consultation'
import { getRoles } from '@app/features/login/features/user'
import { Role } from '@app/lib/api/ApiClient'
import { ChooseDoctorRequest } from '@app/lib/api/request/ChooseDoctorRequest'
import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'
import { chooseActions, listActions } from './reducers'

export const fetchDoctorsIfNeeded = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  dispatch(listActions.request())
  try {
    const state = getState()
    const claimId = getClaimId(state)

    const roles = getRoles(state)
    const shouldFetchDoctors = roles.includes(Role.CaseManager)
    if (shouldFetchDoctors) {
      const doctors = await api.doctors(claimId!)
      return dispatch(listActions.success(doctors))
    }
  } catch (error) {
    dispatch(listActions.error(error.message))
    throw error
  }
}

export const chooseDoctor = (data: ChooseDoctorRequest) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)
  dispatch(chooseActions.request())
  try {
    await api.chooseDoctor(data)
    dispatch(chooseActions.success())

    dispatch(fetchDoctorsIfNeeded())
  } catch (error) {
    dispatch(chooseActions.error(error.message))
    throw error
  }
}
