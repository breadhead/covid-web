import * as React from 'react'

import { useModal } from '@app/features/common/modal'
import { MODAL_KEY as CLOSE_CLAIM_MODAL } from '@app/features/manager/features/closeClaim'
import Button, { ButtonKind, ButtonSize, ButtonType } from '@app/ui/Button'
interface Props {
  className: string
  children?: React.ReactNode
}

const OpenCloseClaimButton = ({ children, className, ...rest }: Props) => {
  const { open } = useModal()

  const openCloseClaimModal = React.useCallback(
    () => {
      open(CLOSE_CLAIM_MODAL)
    },
    [open],
  )

  return (
    <Button
      type={ButtonType.Button}
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

export default OpenCloseClaimButton
