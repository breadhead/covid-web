import * as React from 'react'

import Button from '@app/ui/atoms/Button'
import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'

interface Props {
  claimId: string
  className: string
}

const QuestionnaireWaitingButton = ({ claimId, className }: Props) => (
  <Button className={className}>
    <NavLink href={`/client/claim/${claimId}/situation`} type={NavLinkType.Nav}>
      Заполнить
    </NavLink>
  </Button>
)

export default QuestionnaireWaitingButton
