import * as React from 'react'

import Button from '@app/ui/atoms/Button'
import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'

interface Props {
  claimId: string
  className: string
}

const ClosedButton = ({ claimId, className }: Props) => (
  <Button className={className}>
    <NavLink
      href={`/client/consultation/${claimId}#expert-answers`}
      type={NavLinkType.Nav}
    >
      Посмотреть ответы специалиста
    </NavLink>
  </Button>
)

export default ClosedButton
