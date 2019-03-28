import * as React from 'react'

import { Button } from '@front/ui/button'
import { NavLink, NavLinkType } from '@front/ui/nav-link'

interface Props {
  claimId: string
  className: string
}

const QuestionnaireWaitingButton = ({ claimId, className }: Props) => (
  <Button className={className}>
    <NavLink href={`/client/claim/${claimId}/situation`} type={NavLinkType.Nav}>
      Продолжить заполнение
    </NavLink>
  </Button>
)

export default QuestionnaireWaitingButton
