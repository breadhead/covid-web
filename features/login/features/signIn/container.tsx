import { State } from '@app/lib/store'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'
import { login } from './actions'

import { isModal } from '@app/features/common/modal'
import * as yup from 'yup'
import withSignUpModal, { WithSignUpModal } from '../signUp/withSignUpModal'
import { getViolateState, getWantTo } from './selectors'

import { MODAL_KEY } from './const'
export { MODAL_KEY }

const passwordRecoveryUrl = 'https://cabinet.nenaprasno.ru/restore'

export interface Credentials {
  login: string
  password: string
  wantTo: string
}

interface Props extends ContainerProps {
  passwordRecoveryUrl: string
}

interface ContainerProps extends WithSignUpModal {
  login: (credentials: Credentials) => any
  onFormSubmit: () => Promise<any>
  violateState?: boolean
  wantTo: string
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
}

const Container = (WrappedComponent: React.ComponentType<Props>) => {
  return class extends React.Component<ContainerProps> {
    public render() {
      return (
        <WrappedComponent
          onFormSubmit={this.onFormSubmit}
          passwordRecoveryUrl={passwordRecoveryUrl}
          {...this.props}
        />
      )
    }

    private onFormSubmit = async (credentials: Credentials) => {
      const { violateState, wantTo } = this.props
      credentials.wantTo = wantTo
      await this.props.login(credentials)
      if (violateState) {
        return {
          login: 'Неверный логин или пароль',
          password: 'Неверный логин или пароль',
        }
      }
    }
  }
}

const mapState = (state: State) => ({
  violateState: getViolateState(state),
  wantTo: getWantTo(state),
})

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  login: (credentials: Credentials) =>
    dispatch(login(
      credentials.login,
      credentials.password,
      credentials.wantTo,
    ) as any),
})

export default compose(
  isModal(MODAL_KEY),
  withSignUpModal,
  connect(
    mapState,
    mapDispatch,
  ),
  Container,
)
