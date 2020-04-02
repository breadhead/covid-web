import React from 'react';
import { connect } from 'react-redux';
import { AnyAction, compose, Dispatch } from 'redux';

import { signUp } from '@app/features/login/features/signUp/actions';
import { SignUpError } from '@app/features/login/features/signUp/reducer';
import { getSignUpError } from '@app/features/login/features/signUp/selectors';
import { State } from '@app/lib/store';
import { isModal } from '@app/features/common/modal';

import { withSignInModal } from '../signIn';
import { MODAL_KEY } from './const';
export { MODAL_KEY };

export interface SignUpData {
  login: string;
  password: string;
  confirm: string;
}

interface Props {
  signUp: (signUpData: SignUpData) => any;
  onFormSubmit: () => Promise<any>;
  error?: SignUpError;
}

const Container = (WrappedComponent: React.ComponentType<Props>) => {
  return class ContaineredComponent extends React.Component<Props> {
    public render() {
      return (
        <WrappedComponent onFormSubmit={this.onFormSubmit} {...this.props} />
      );
    }

    // eslint-disable-next-line consistent-return
    private onFormSubmit = async (credentials: SignUpData) => {
      try {
        await this.props.signUp(credentials);
      } catch (e) {
        const { error } = this.props;

        if (error) {
          return {
            login: error.fields.login && error.message,
            password: error.fields.password && error.message,
            confirm: error.fields.confirm && error.message,
          };
        }
      }
    };
  };
};

const mapState = (state: State) => ({
  error: getSignUpError(state),
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  signUp: (signUpData: SignUpData) =>
    dispatch(
      signUp(signUpData.login, signUpData.password, signUpData.confirm) as any,
    ),
});

export default compose(
  isModal(MODAL_KEY),
  withSignInModal,
  connect(mapState, mapDispatch),
  Container,
);
