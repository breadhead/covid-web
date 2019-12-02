import * as React from 'react'

import { useSpecificModal } from '@app/features/common/modal'
import { Button, ButtonSize } from '@front/ui/button'

import { FINISH_MODAL_KEY } from '../../organisms/withFinishModal'
import { useApi } from '@app/lib/api/useApi'
import { DontUnderstandEnum } from '../../DontUnderstandEnum'

interface Props {
  className?: string
  claimId: string
}

export const FinishButton = ({ className, claimId }: Props) => {
  const { open } = useSpecificModal(FINISH_MODAL_KEY)
  const api = useApi()

  const onFinishButtonClick = async () => {
    open()
    await api.updateDontUnderstand({ id: claimId, status: DontUnderstandEnum.YES })
  }

  return (
    <>
      <Button
        size={ButtonSize.ExtraLarge}
        className={className}
        onClick={onFinishButtonClick as any}
      >
        Да, мне всё понятно
      </Button>
    </>
  )
}
