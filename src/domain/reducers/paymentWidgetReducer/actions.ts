import { Dispatch } from 'redux';

import { actions } from './reducer';

export const setPaymetWidgetData = (data: any) => async (
  dispatch: Dispatch<any>,
  // getState: () => State,
  // { getApi }: ExtraArgs,
) => {
  try {
    return dispatch(actions.success(data));
  } catch (error) {
    return dispatch(actions.error(error.message));
  }
};
