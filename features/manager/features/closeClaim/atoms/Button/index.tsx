import * as React from 'react'

import { useModal } from '@app/features/common/modal'
import Button, { ButtonSize, ButtonType } from '@app/ui/atoms/Button'
import {
  addCommentFieldToValues,
  InitialValues,
} from '../../organisms/Modal/config'
import { MODAL_KEY as REFUSE_CONFIRM_MODAL } from '../../organisms/RefuseModal/const'
interface Props {
  children: React.ReactNode
  className: string
  saveCurrentCloseData: (values: InitialValues) => void
  values: any
}

const SubmitButton = ({
  children,
  saveCurrentCloseData,
  className,
  values,
}: Props) => {
  const { open } = useModal()
  const openConfirmModal = React.useCallback(
    () => {
      const currentValues = addCommentFieldToValues(values)
      saveCurrentCloseData(currentValues)
      open(REFUSE_CONFIRM_MODAL)
    },
    [values, saveCurrentCloseData],
  )
  return (
    <Button
      className={className}
      type={ButtonType.Submit}
      size={ButtonSize.Large}
      onClick={openConfirmModal}
    >
      {children}
    </Button>
  )
}

export default SubmitButton
