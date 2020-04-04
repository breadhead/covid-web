import { Dispatch } from 'redux';

import routes from '@app/routes';
import { ExtraArgs, State } from '@app/src/lib/store';
import { getUserEmailLocalStorage } from '@app/src/domain/reducers/signInReducer/userEmailLocalStorage';

import { actions } from './reducer';
import {
  setFormRequestFinished,
  setFormId,
  getFormId,
  resetFormId,
} from '../../../features/landing/features/request/organisms/RequestForm/localStorage';
import { FormRequestType } from '../../models/common/FormRequestType';

const { Router } = routes;

export const saveCoronaRequestForm = (requestFormData: any) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState);
  try {
    dispatch(actions.request());
    const email = getUserEmailLocalStorage();
    const { id } = await api.saveCoronaRequestForm(
      {
        ...requestFormData,
        email,
      },
      FormRequestType.Corona,
    );
    setFormId(id);
    setFormRequestFinished();
    Router.pushRoute('/request/chat');
    return dispatch(actions.success(requestFormData));
  } catch (error) {
    return dispatch(actions.error(error.message));
  }
};

export const saveForHospitalsForm = (requestFormData: any) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState);
  try {
    dispatch(actions.request());

    await api.saveCoronaRequestForm(
      requestFormData,
      FormRequestType.ForHospitals,
    );

    return dispatch(actions.success(requestFormData));
  } catch (error) {
    return dispatch(actions.error(error.message));
  }
};
export const saveVolunteerForm = (requestFormData: any) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState);
  try {
    dispatch(actions.request());

    await api.saveCoronaRequestForm(requestFormData, FormRequestType.Volunteer);

    return dispatch(actions.success(requestFormData));
  } catch (error) {
    return dispatch(actions.error(error.message));
  }
};

export const updateRequestFormData = () => async (
  _dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState);
  try {
    const formId = getFormId();
    const email = getUserEmailLocalStorage();
    if (formId) {
      await api.updateCoronaRequestForm({ id: formId, email: email });
      resetFormId();
    }
  } catch (error) {
    console.log('error', error);
  }
};
