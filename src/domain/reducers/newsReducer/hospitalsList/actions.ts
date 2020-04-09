import { Dispatch } from 'redux';

import { needToFetch } from '@app/src/helpers/needToFetch';
import { ExtraArgs, State } from '@app/src/lib/store';

import { newsForHospitalsQueryBuilder } from '../helpers/newsForHospitals';
import { actions } from './reducer';
import { selectHospitalNews } from './selectHospitalNews';

export const getNewsForHospitals = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  if (needToFetch(selectHospitalNews(getState()))) {
    const api = getApi(getState);
    try {
      dispatch(actions.request());

      const query = newsForHospitalsQueryBuilder();

      const news = await api.getNews(query);

      return dispatch(actions.success(news));
    } catch (error) {
      return dispatch(actions.error(error.message));
    }
  }
};
