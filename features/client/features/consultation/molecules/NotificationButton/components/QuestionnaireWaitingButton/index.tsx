import * as React from 'react'

import Button from '@app/ui/Button'
import NavLink, { NavLinkType } from '@app/ui/NavLink'

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
