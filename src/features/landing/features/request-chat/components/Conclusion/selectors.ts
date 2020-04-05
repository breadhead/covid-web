import { State } from '@app/src/lib/store';

export const selectRequestForm = (state: State) =>
  state.requestForm.requestFormData;
