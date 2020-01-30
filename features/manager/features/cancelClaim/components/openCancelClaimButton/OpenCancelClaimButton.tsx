import * as React from 'react'
import { useModal } from '@app/features/common/modal'
import { Button, ButtonKind, ButtonSize } from '@front/ui/button'

interface OpenCancelClaimButtonProps {
  className: string
  children: any
}

export const CancelClaimButton = ({
  className,
  children,
  ...rest
}: OpenCancelClaimButtonProps) => {
  const { open } = useModal()

  const openCloseClaimModal = React.useCallback(
    () => {
      //TODO: change to const
      open('CANCEL_CLAIM_MODAL')
    },
    [open],
  )

  return (
    <Button
      className={className}
      onClick={openCloseClaimModal}
      size={ButtonSize.Large}
      kind={ButtonKind.Secondary}
      {...rest}
    >
      {children}
    </Button>
  )
}
