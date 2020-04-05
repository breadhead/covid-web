import Router from 'next/router';
import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction, compose, Dispatch } from 'redux';
import * as yup from 'yup';

import { State } from '@app/src/lib/store';
import { isModal } from '@app/src/features/common/modal';

import withSignUpModal, { WithSignUpModal } from '../signUp/withSignUpModal';
import { loginAction } from '../../../../domain/reducers/signInReducer/actions';
import { SIGN_IN_MODAL } from '../../../../domain/reducers/signInReducer/const';
import { getViolateState } from '../../../../domain/reducers/signInReducer/selectors';
import { getSignInError } from '../../../../domain/reducers/signInReducer/selectors/getSignInError';
import withSignInModal from './withSignInModal';

export interface Credentials {
  login: string;
  password: string;
}

interface ContainerProps extends WithSignUpModal {
  login: (credentials: Credentials, wantTo?: string | string[]) => any;
  onFormSubmit: () => Promise<any>;
  violateState?: boolean;
  closeModal: () => void;
}

export const schema = {
  login: yup.string().email('Введите email').required('Обязательное поле'),
  password: yup
    .string()
    .min(3, 'Пароль должен быть длиннее 2 символов')
    .required('Пароль должен быть длиннее 2 символов'),
};

const Container = (WrappedComponent: React.ComponentType<ContainerProps>) => {
  return class ContaineredComponent extends React.Component<ContainerProps> {
    public render() {
      return (
        <WrappedComponent onFormSubmit={this.onFormSubmit} {...this.props} />
      );
    }

    // eslint-disable-next-line consistent-return
    private onFormSubmit = async (credentials: Credentials) => {
      const { violateState } = this.props;
      const { wantTo } = Router.query as any;

      await this.props.login(credentials, wantTo);

      if (violateState) {
        return {
          login: 'Неверный логин или пароль',
          password: 'Неверный логин или пароль',
        };
      }
    };
  };
};

const mapState = (state: State) => ({
  violateState: getViolateState(state),
  error: getSignInError(state),
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  login: (credentials: Credentials) =>
    dispatch(loginAction(credentials.login, credentials.password) as any),
});

export default compose(
  isModal(SIGN_IN_MODAL),
  withSignInModal,
  withSignUpModal,
  connect(mapState, mapDispatch),
  Container,
);
