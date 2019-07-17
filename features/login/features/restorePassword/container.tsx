import * as React from 'react'
import { useState } from 'react'
import { compose } from 'redux'

import { isModal } from '@app/features/common/modal'
import * as yup from 'yup'

import { RESTORE_PASSWORD_MODAL_KEY } from './modal-key'
import { withSignInModal, WithSignInModal, loginAction } from '../signIn'
import { withSignUpModal, WithSignUpModal } from '../signUp'
import { useApi } from '@app/lib/api/useApi'
export { RESTORE_PASSWORD_MODAL_KEY }

export interface Credentials {
  login: string
}

interface ContainerProps extends WithSignInModal {
  onResetFormSubmit: () => Promise<any>
  onLoginFormSubmit: () => Promise<any>
  phone: string
}

export const schema = {
  login: yup
    .string()
    .email('Введите email')
    .required('Обязательное поле'),
}

const Container = (
  WrappedComponent: React.ComponentType<ContainerProps & WithSignUpModal>,
) => (props: ContainerProps & WithSignUpModal) => {
  const api = useApi()
  const [phone, setPhone] = useState<string | null>(null)
  const [login, setLogin] = useState<string | null>(null)

  const onResetFormSubmit = async (credentials: Credentials) => {
    await api.restorePassword(credentials.login).then(setPhone)
    setLogin(credentials.login)
  }

  const onLoginFormSubmit = async (props: any) => {
    await loginAction(login!, props.password, '')
    console.log(login, props)
  }

  return (
    <WrappedComponent
      onResetFormSubmit={onResetFormSubmit}
      onLoginFormSubmit={onLoginFormSubmit}
      phone={phone}
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
