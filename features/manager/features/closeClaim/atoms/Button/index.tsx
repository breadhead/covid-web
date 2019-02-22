import * as React from 'react'
import * as styles from './Button.css'

import { withModal, WithModalProps } from '@app/features/common/modal'
import { CloseType } from '@app/lib/api/request/CloseClaimRequest'
import Button, { ButtonSize, ButtonType } from '@app/ui/atoms/Button'
import { refuseTypes } from '../../organisms/Modal/config'
import { MODAL_KEY as REFUSE_CONFIRM_MODAL } from '../../organisms/RefuseModal/const'
interface Props {
  currentCloseType: CloseType
  children: React.ReactNode
}

const SubmitButton = ({
  currentCloseType,
  modal,
  children,
}: Props & WithModalProps) => {
  const submit = () => null
  const openConfirmModal = () => modal.open(REFUSE_CONFIRM_MODAL)
  return (
    <Button
      className={styles.button}
      size={ButtonSize.Large}
      type={ButtonType.Button}
      onClick={
        refuseTypes.includes(currentCloseType) ? openConfirmModal : submit
      }
    >
      {children}
    </Button>
  )
}

export default withModal(SubmitButton)
