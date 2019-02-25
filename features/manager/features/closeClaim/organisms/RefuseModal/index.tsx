import * as React from 'react'
import * as styles from './RefuseModal.css'

import { isModal, withModal } from '@app/features/common/modal'
import Button, { ButtonKind, ButtonSize } from '@app/ui/atoms/Button'
import { compose } from 'recompose'
import { MODAL_KEY } from './const'

const RefuseModal = () => (
  <article className={styles.modal}>
    <h1 className={styles.title}>
      Вы действительно хотите сменить статус на «Отказано»?
    </h1>
    <div className={styles.buttons}>
      <Button
        size={ButtonSize.Large}
        kind={ButtonKind.Secondary}
        className={styles.cancel}
      >
        Отмена
      </Button>
      <Button size={ButtonSize.Large}>Да, изменить статус</Button>
    </div>
  </article>
)

export default compose(
  isModal(MODAL_KEY),
  withModal,
)(RefuseModal)
