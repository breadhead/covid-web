/* eslint-disable */
import * as React from 'react';
import { useState } from 'react';
import { compose } from 'redux';
import { isModal } from '@app/src/features/common/modal';

import { useThunk } from '@app/src/helpers/hooks/useThunk';
import { RESTORE_PASSWORD_MODAL_KEY } from './organisms/Modal';
import { loginAction } from '@app/src/domain/reducers/signInReducer/actions';
import withSignInModal from '../signIn/withSignInModal';
import withSignUpModal from '../signUp/withSignUpModal';

export interface Credentials {
  login: string;
}

interface ContainerProps {
  onResetFormSubmit: () => Promise<any>;
  onLoginFormSubmit: () => Promise<any>;
  phone: string;
}

const Container = (WrappedComponent: React.ComponentType<any>) => (
  props: any,
) => {
  const dispatch = useThunk();
  const [login, setLogin] = useState<string | null>(null);

  const onResetFormSubmit = async (credentials: Credentials) => {
    setLogin(credentials.login);
  };

  const onLoginFormSubmit = async (props: any) => {
    await dispatch(loginAction(login!, props.password));
  };

  return (
    <WrappedComponent
      onResetFormSubmit={onResetFormSubmit}
      onLoginFormSubmit={onLoginFormSubmit}
      phone={'phone'}
      {...props}
    />
  );
};

export default compose(
  isModal(RESTORE_PASSWORD_MODAL_KEY),
  withSignInModal,
  withSignUpModal,
  Container,
);
