import * as React from 'react'

import { isModal, withModal } from '@app/features/common/modal'
import { compose } from 'recompose'
import { MODAL_KEY } from './const'

const RefuseModal = () => <article>memem memem memmeme </article>

export default compose(
  isModal(MODAL_KEY),
  withModal,
)(RefuseModal)
