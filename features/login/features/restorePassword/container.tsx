import { State } from '@app/lib/store'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'
import { login } from './actions'

import { isModal } from '@app/features/common/modal'
import * as yup from 'yup'
import { getViolateState } from './selectors'

import Router from 'next/router'
import { RESTORE_PASSWORD_MODAL_KEY } from './modal-key'
import { withSignInModal, WithSignInModal } from '../signIn'
import { withSignUpModal, WithSignUpModal } from '../signUp';
export { RESTORE_PASSWORD_MODAL_KEY }

export interface Credentials {
  login: string
}

interface ContainerProps extends WithSignInModal {
  login: (credentials: Credentials, wantTo?: string | string[]) => any
  onFormSubmit: () => Promise<any>
  violateState?: boolean
}

export const schema = {
  login: yup
    .string()
    .email('Введите email')
    .required('Обязательное поле')
}

const Container = (WrappedComponent: React.ComponentType<ContainerProps & WithSignUpModal>) => {
  return class ContaineredComponent extends React.Component<ContainerProps & WithSignUpModal> {
    public render() {
      return (
        <WrappedComponent onFormSubmit={this.onFormSubmit} {...this.props} />
      )
    }

    // eslint-disable-next-line consistent-return
    private onFormSubmit = async (credentials: Credentials) => {
      const { violateState } = this.props
      const { wantTo } = Router.query as any

      await this.props.login(credentials, wantTo)
      if (violateState) {
        return {
          login: 'Введите вашу почту',
        }
      }
    }
  }
}

const mapState = (state: State) => ({
  violateState: getViolateState(state)
})

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  login: (credentials: Credentials, wantTo: string) =>
    dispatch(login(credentials.login, wantTo) as any)
})

export default compose(
  isModal(RESTORE_PASSWORD_MODAL_KEY),
  withSignInModal,
  withSignUpModal,
  connect(
    mapState,
    mapDispatch
  ),
  Container
)
