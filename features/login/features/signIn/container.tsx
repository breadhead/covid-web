import Router from 'next/router';
import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction, compose, Dispatch } from 'redux';
import * as yup from 'yup';

import { State } from './node_modules/@app/src/lib/store';
import { isModal } from './node_modules/@app/features/common/modal';
import withSignUpModal, { WithSignUpModal } from '../signUp/withSignUpModal';
import { loginAction } from './actions';
import { MODAL_KEY } from './const';
import { getViolateState } from './selectors';
import { getSignInError } from './selectors/getSignInError';

export { MODAL_KEY };

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
  isModal(MODAL_KEY),

  withSignUpModal,
  connect(mapState, mapDispatch),
  Container,
);
