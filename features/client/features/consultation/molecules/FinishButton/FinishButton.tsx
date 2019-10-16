import * as React from 'react'

import { useSpecificModal } from '@app/features/common/modal'

// import routes from '@app/routes'
import { Button, ButtonSize } from '@front/ui/button'

import { FINISH_MODAL_KEY } from '../../organisms/withFinishModal'

// const { Router } = routes

interface Props {
  className?: string
}

export const FinishButton = ({ className }: Props) => {
  const { open } = useSpecificModal(FINISH_MODAL_KEY)

  const openModal = () => {
    open()
    // Router.pushRoute(`/?donation`);
  }

  return (
    <>
      <Button
        size={ButtonSize.ExtraLarge}
        className={className}
        onClick={openModal as any}
      >
        Да, мне все понятно
      </Button>
    </>
  )
}
