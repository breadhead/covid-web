import * as React from 'react'

import { useSpecificModal } from '@app/features/common/modal'

import Button, { ButtonSize } from '@app/ui/Button'
import { MODAL_KEY } from '../../organisms/withFinishModal'

interface Props {
  className?: string
}

const FinishButton = ({ className }: Props) => {
  const { open } = useSpecificModal(MODAL_KEY)

  return (
    <Button size={ButtonSize.Large} className={className} onClick={open}>
      Да, cпасибо, мне все понятно
    </Button>
  )
}

export default FinishButton
