import { State } from '@app/lib/store'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'
import { login } from './actions'

import { isModal } from '@app/features/common/modal'
import * as yup from 'yup'
import { getViolateState } from './selectors'

export const MODAL_KEY = 'sign-in'

export interface Credentials {
  login: string
  password: string
}

interface Props {
  login: (credentials: Credentials) => any
  onFormSubmit: () => Promise<any>
  violateState?: boolean
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
  return class extends React.Component<Props> {
    public render() {
      return (
        <WrappedComponent onFormSubmit={this.onFormSubmit} {...this.props} />
      )
    }

    private onFormSubmit = async (credentials: Credentials) => {
      await this.props.login(credentials)
      const { violateState } = this.props
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
})

const mapDipatch = (dispatch: Dispatch<AnyAction>) => ({
  login: (credentials: Credentials) =>
    dispatch(login(credentials.login, credentials.password) as any),
})

export default compose(
  isModal(MODAL_KEY),
  connect(
    mapState,
    mapDipatch,
  ),
  Container,
)
