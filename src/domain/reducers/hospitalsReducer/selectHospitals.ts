import { State } from '@app/src/lib/store';

export const selectHospitals = (state: State) => state.hospitals.list;
