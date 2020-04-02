import { State } from '@app/lib/store';

export const selectRequestForm = (state: State) =>
  state.requestForm.requestFormData;
