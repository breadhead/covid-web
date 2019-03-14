import * as React from 'react'

import { useModal } from '@app/features/common/modal'
import { Button, ButtonSize } from '@front/ui/button'
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
    [values, saveCurrentCloseData, open],
  )
  return (
    <Button
      className={className}
      submit
      size={ButtonSize.Large}
      onClick={openConfirmModal}
    >
      {children}
    </Button>
  )
}

export default SubmitButton
