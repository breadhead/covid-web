import * as React from 'react'

import { Button } from '@front/ui/button'
import { NavLink } from '@front/ui/nav-link'
import { expertAnswersUTM } from '@app/features/common/analytics/utmCodes'

interface Props {
  claimId: string
  className: string
}

const ClosedButton = ({ claimId, className }: Props) => (
  <NavLink
    href={`/client/consultation/${claimId}?${expertAnswersUTM}#expert-answers`}
    withoutUnderline
    className={className}
  >
    <Button>Посмотреть ответы специалиста</Button>
  </NavLink>
)

export default ClosedButton
