import * as React from 'react'

import Button from '@app/ui/Button'
import NavLink, { NavLinkType } from '@app/ui/NavLink'

interface Props {
  claimId: string
  className: string
}

const ClosedButton = ({ claimId, className }: Props) => (
  <NavLink
    href={`/client/consultation/${claimId}#expert-answers`}
    type={NavLinkType.Nav}
    className={className}
  >
    <Button>Посмотреть ответы специалиста</Button>
  </NavLink>
)

export default ClosedButton
