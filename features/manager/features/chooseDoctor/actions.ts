import { getClaimId, nextStatus } from '@app/features/common/consultation'
import { getRoles } from '@app/features/login/features/user'
import { ChooseDoctorRequest } from '@app/lib/api/request/ChooseDoctorRequest'
import { ExtraArgs, State } from '@app/lib/store'
import { Role } from '@app/models/Users/User'
import { Dispatch } from 'redux'
import { chooseActions, listActions } from './reducers'
import { getAssignedDoctor } from './selectors'

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
  await dispatch(fetchDoctorsIfNeeded())

  const api = getApi(getState)
  dispatch(chooseActions.request())

  const assignedDoctor = getAssignedDoctor(getState())

  try {
    await api.chooseDoctor(data)

    dispatch(chooseActions.success())

    if (!assignedDoctor) {
      await dispatch(nextStatus())
    }

    dispatch(fetchDoctorsIfNeeded())
  } catch (error) {
    dispatch(chooseActions.error(error.message))
    throw error
  }
}
