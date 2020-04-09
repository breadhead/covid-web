import { Dispatch } from 'redux';

import { ExtraArgs, State } from '@app/src/lib/store';
import { needToFetch } from '@app/src/helpers/needToFetch';

import { actions } from './reducer';
import { selectPartners } from './selectPartners';

export const getPartnersFromSanity = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  if (needToFetch(selectPartners(getState()))) {
    const api = getApi(getState);
    try {
      dispatch(actions.request());

      const partners = await api
        .getPartners()
        .then((res) =>
          res.sort((a, b) => (a.sortIndex < b.sortIndex ? -1 : 1)),
        );

      return dispatch(actions.success(partners));
    } catch (error) {
      return dispatch(actions.error(error.message));
    }
  }
};
