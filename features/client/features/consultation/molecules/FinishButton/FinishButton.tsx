import * as React from 'react'

import { useSpecificModal } from '@app/features/common/modal'
import { Button, ButtonSize } from '@front/ui/button'

import { FINISH_MODAL_KEY } from '../../organisms/withFinishModal'
import { useCallback } from 'react'

interface Props {
  className?: string
  onClick: () => Promise<void>
}

export const FinishButton = ({ className, onClick }: Props) => {
  const { open } = useSpecificModal(FINISH_MODAL_KEY)

  const onFinishButtonClick = useCallback(async () => {
    open()
    await onClick()
  }, [open, onClick])

  return (
    <>
      <Button
        size={ButtonSize.ExtraLarge}
        className={className}
        onClick={onFinishButtonClick}
      >
        Да, мне всё понятно
      </Button>
    </>
  )
}
