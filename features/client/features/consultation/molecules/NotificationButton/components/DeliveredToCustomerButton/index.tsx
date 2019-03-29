import * as React from 'react'

import { Button, ButtonSize } from '@front/ui/button'
import { NavLink } from '@front/ui/nav-link'

interface Props {
  claimId: string
  className: string
}

const DeliveredToCustomerButton = ({ claimId, className }: Props) => (
  <NavLink
    href={`/client/consultation/${claimId}#expert-answers`}
    withoutUnderline
    className={className}
  >
    <Button size={ButtonSize.Large}>Посмотреть ответы эксперта</Button>
  </NavLink>
)

export default DeliveredToCustomerButton
