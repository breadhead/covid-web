import React from 'react'
import { withModal, WithModalProps } from '@app/features/common/modal'
import { RESTORE_PASSWORD_MODAL_KEY } from './modal-key'

export interface WithRestorePasswordModal {
  openModal: () => void
}

const Container = (Component: React.ComponentType<WithRestorePasswordModal>) =>
  withModal(({ modal, ...props }: WithModalProps) => (
    <Component
      {...props}
      openModal={() => modal.open(RESTORE_PASSWORD_MODAL_KEY)}
    />
  ))

export default Container
