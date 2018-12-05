import React from 'react'
import { compose } from 'recompose'

import { ModalDispatcher } from '@app/features/common/modal'

export const MODAL_KEY = 'sms-confirm'

const isModal = ModalDispatcher.getInstance().isModal(MODAL_KEY)

const Container = (WrappedComponent: any) => (props: any) => <WrappedComponent {...props} />

export default compose(
  isModal,
  Container,
)
