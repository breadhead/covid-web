import { actions } from './reducer'
import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'

export const saveFormToAirtable = (formType: string, formData: any) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState);
  try {
    dispatch(actions.request());
    const { id } = await api.saveFormToAirtalbe(formType, formData);
    return dispatch(actions.success(formData));
  } catch (error) {
    return dispatch(actions.error(error.message));
  }
};