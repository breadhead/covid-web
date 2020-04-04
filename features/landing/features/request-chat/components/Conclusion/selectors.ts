import { State } from './node_modules/@app/src/lib/store';

export const selectRequestForm = (state: State) =>
  state.requestForm.requestFormData;
