import { signUp } from '@app/features/login/features/signUp/actions'
import { SignUpError } from '@app/features/login/features/signUp/reducer'
import { getSignUpError } from '@app/features/login/features/signUp/selectors'
import { State } from '@app/lib/store'
import React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'

import { isModal } from '@app/features/common/modal'
import * as yup from 'yup'
import { withSignInModal } from '../signIn'

export const MODAL_KEY = 'sign-up'

export interface SignUpData {
  login: string
  password: string
  confirm: string
}

interface Props {
  signUp: (signUpData: SignUpData) => any
  onFormSubmit: () => Promise<any>
  error?: SignUpError
}

export const schema = {
  login: yup
    .string()
    .email('Введите email')
    .required('Обязательное поле'),
  password: yup
    .string()
    .min(3, 'Пароль должен быть длиннее 2 символов')
    .required('Пароль должен быть длиннее 2 символов'),
  confirm: yup // TODO find a way to validate it being similar to password, oneOf([yup.ref]) doesn't work here
    .string()
    .required('Подтвердите пароль'),
}

const Container = (WrappedComponent: React.ComponentType<Props>) => {
  return class extends React.Component<Props> {
    public render() {
      return (
        <WrappedComponent onFormSubmit={this.onFormSubmit} {...this.props} />
      )
    }

    private onFormSubmit = async (credentials: SignUpData) => {
      try {
        await this.props.signUp(credentials)
      } catch (e) {
        const { error } = this.props

        if (error) {
          return {
            login: error.fields.login && error.message,
            password: error.fields.password && error.message,
            confirm: error.fields.confirm && error.message,
          }
        }
      }
    }
  }
}

const mapState = (state: State) => ({
  error: getSignUpError(state),
})

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  signUp: (signUpData: SignUpData) =>
    dispatch(signUp(
      signUpData.login,
      signUpData.password,
      signUpData.confirm,
    ) as any),
})

export default compose(
  isModal(MODAL_KEY),
  withSignInModal,
  connect(
    mapState,
    mapDispatch,
  ),
  Container,
)
