import * as React from 'react'

import Button, { ButtonSize } from '@app/ui/atoms/Button'
import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'

interface Props {
  claimId: string
  className: string
}

const DeliveredToCustomerButton = ({ claimId, className }: Props) => (
  <NavLink
    href={`/client/consultation/${claimId}#expert-answers`}
    type={NavLinkType.Nav}
    className={className}
  >
    <Button size={ButtonSize.Large}>Посмотреть ответы эксперта</Button>
  </NavLink>
)

export default DeliveredToCustomerButton
