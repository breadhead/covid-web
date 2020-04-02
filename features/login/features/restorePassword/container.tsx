/* eslint-disable */
import * as React from 'react'
import { useState } from 'react'
import { compose } from 'redux'
import { isModal } from '@app/features/common/modal'
import { withSignInModal, WithSignInModal, loginAction } from '../signIn'
import { withSignUpModal, WithSignUpModal } from '../signUp'

import { useThunk } from '@front/hooks/useThunk'
import { RESTORE_PASSWORD_MODAL_KEY } from './organisms/Modal'

export interface Credentials {
  login: string
}

interface ContainerProps extends WithSignInModal {
  onResetFormSubmit: () => Promise<any>
  onLoginFormSubmit: () => Promise<any>
  phone: string
}

const Container = (
  WrappedComponent: React.ComponentType<ContainerProps & WithSignUpModal>,
) => (props: ContainerProps & WithSignUpModal) => {
  const dispatch = useThunk()
  const [login, setLogin] = useState<string | null>(null)

  const onResetFormSubmit = async (credentials: Credentials) => {
    setLogin(credentials.login)
  }

  const onLoginFormSubmit = async (props: any) => {
    await dispatch(loginAction(login!, props.password))
  }

  return (
    <WrappedComponent
      onResetFormSubmit={onResetFormSubmit}
      onLoginFormSubmit={onLoginFormSubmit}
      phone={'phone'}
      {...props}
    />
  )
}

export default compose(
  isModal(RESTORE_PASSWORD_MODAL_KEY),
  withSignInModal,
  withSignUpModal,
  Container,
)
