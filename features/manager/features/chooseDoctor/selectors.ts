import { State } from '@app/lib/store'

export const getDoctors = (state: State) =>
  state.manager.chooseDoctor.list.doctors
