import React from 'react'
import { compose } from 'recompose'

import { isModal } from '@app/features/common/modal'

export const MODAL_KEY = 'sign-up'

const Container = (WrappedComponent: any) => (props: any) => (
  <WrappedComponent {...props} />
)

export default compose(
  isModal(MODAL_KEY),
  Container,
)