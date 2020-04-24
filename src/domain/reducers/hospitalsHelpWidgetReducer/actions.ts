import { Dispatch } from 'redux';

import { ExtraArgs, State } from '@app/src/lib/store';
import { needToFetch } from '@app/src/helpers/needToFetch';

import { actions } from './reducer';
import { selectHospitalsHelpWidgetData } from './selectHospitalHelpWidgetData';

export const getHospitalsHelpWidgetDataFromSanity = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  if (needToFetch(selectHospitalsHelpWidgetData(getState()))) {
    const api = getApi(getState);
    try {
      dispatch(actions.request());

      const hospitalsHelpWidgetData = await api.getHospitalsHelpWidget();

      return dispatch(actions.success(hospitalsHelpWidgetData));
    } catch (error) {
      return dispatch(actions.error(error.message));
    }
  }
};
