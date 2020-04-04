import React from 'react';
import { connect } from 'react-redux';
import { AnyAction, compose, Dispatch } from 'redux';

import { signUp } from '@app/src/domain/reducers/signupReducer/actions';
import { SignUpError } from '@app/src/domain/reducers/signupReducer/reducer';
import { getSignUpError } from '@app/src/domain/reducers/signupReducer/selectors';
import { State } from '@app/src/lib/store';
import { isModal } from '@app/src/features/common/modal';

import { MODAL_KEY } from '../../../../domain/reducers/signupReducer/const';
import { withSignUpModal } from '.';
import { withSignInModal } from '../signIn';
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
) as any;
