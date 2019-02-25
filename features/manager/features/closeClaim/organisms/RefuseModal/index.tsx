import * as React from 'react'
import * as styles from './RefuseModal.css'

import { isModal, withModal } from '@app/features/common/modal'
import Button, { ButtonKind, ButtonSize } from '@app/ui/atoms/Button'
import { compose } from 'recompose'
import OpenCloseClaimButton from '../../atoms/OpenCloseClaimButton'
import { MODAL_KEY } from './const'

class RefuseModal extends React.Component {
  public render() {
    return (
      <article className={styles.modal}>
        <h1 className={styles.title}>
          Вы действительно хотите сменить статус на «Отказано»?
        </h1>
        <div className={styles.buttons}>
          <OpenCloseClaimButton
            className={styles.cancel}
            size={ButtonSize.Large}
            kind={ButtonKind.Secondary}
          >
            Отмена
          </OpenCloseClaimButton>
          <Button size={ButtonSize.Large}>Да, изменить статус</Button>
        </div>
      </article>
    )
  }
}

export default compose(
  isModal(MODAL_KEY),
  withModal,
)(RefuseModal)
