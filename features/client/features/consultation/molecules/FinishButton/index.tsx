import * as React from 'react'

import { useSpecificModal } from '@app/features/common/modal'

import { Button, ButtonSize } from '@front/ui/button'

import { FINISH_MODAL_KEY } from '../../organisms/withFinishModal'

interface Props {
  className?: string
}

const FinishButton = ({ className }: Props) => {
  const { open } = useSpecificModal(FINISH_MODAL_KEY)

  return (
    <>
      <Button
        size={ButtonSize.ExtraLarge}
        className={className}
        onClick={open as any}
      >
        Да, мне все понятно
      </Button>
    </>
  )
}

export default FinishButton
