import * as React from 'react'

import { withModal, WithModalProps } from '@app/features/common/modal'

import Button, { ButtonSize } from '@app/ui/atoms/Button'
import { MODAL_KEY } from '../../organisms/withFinishModal'

interface Props {
  className?: string
}

const FinishButton = ({ className, modal }: Props & WithModalProps) => (
  <Button
    onClick={() => modal.open(MODAL_KEY)}
    className={className}
    size={ButtonSize.Large}
  >
    Да, cпасибо, мне все понятно
  </Button>
)

export default withModal(FinishButton)
