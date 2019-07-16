import { State } from '@app/lib/store'
import * as React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'

import { isModal } from '@app/features/common/modal'
import * as yup from 'yup'

import { RESTORE_PASSWORD_MODAL_KEY } from './modal-key'
import { withSignInModal, WithSignInModal } from '../signIn'
import { withSignUpModal, WithSignUpModal } from '../signUp'
import { restorePassword } from './actions'
import { useApi } from '@app/lib/api/useApi';
export { RESTORE_PASSWORD_MODAL_KEY }

export interface Credentials {
  login: string
}

interface ContainerProps extends WithSignInModal {
  onFormSubmit: () => Promise<any>
  phone: string
}

export const schema = {
  login: yup
    .string()
    .email('Введите email')
    .required('Обязательное поле')
}

const Container = (
  WrappedComponent: React.ComponentType<ContainerProps & WithSignUpModal>
) => (props: ContainerProps & WithSignUpModal) => {
  const api = useApi()
  const [phone, setPhone] = useState<string | null>(null)

  const onFormSubmit = async (credentials: Credentials) => {
    await api.restorePassword(credentials.login).then(setPhone)
  }

  return <WrappedComponent onFormSubmit={onFormSubmit} phone={phone} {...props} />
}

export default compose(
  isModal(RESTORE_PASSWORD_MODAL_KEY),
  withSignInModal,
  withSignUpModal,
  Container
)
