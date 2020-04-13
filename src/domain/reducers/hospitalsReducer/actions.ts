import { Dispatch } from 'redux';

import { ExtraArgs, State } from '@app/src/lib/store';
import { needToFetch } from '@app/src/helpers/needToFetch';

import { actions } from './reducer';
import { selectHospitals } from './selectHospitals';

export const getHospitalsFromSanity = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  if (needToFetch(selectHospitals(getState()))) {
    const api = getApi(getState);
    try {
      dispatch(actions.request());

      const hospitals = await api.getHospitals();

      return dispatch(actions.success(hospitals));
    } catch (error) {
      return dispatch(actions.error(error.message));
    }
  }
};
