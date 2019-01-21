import { State } from '@app/lib/store'

export const getDoctors = (state: State) =>
  state.manager.chooseDoctor.list.doctors || []

export const getChooseDoctorError = (state: State) =>
  state.manager.chooseDoctor.choose.error

export const getAssignedDoctor = (state: State) =>
  state.manager.chooseDoctor.list.doctors.find(doctor => doctor.assigned)
