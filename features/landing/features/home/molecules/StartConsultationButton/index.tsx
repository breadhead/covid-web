import * as React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { getToken } from './selectors'

import { withSignUpModal } from '@app/features/login'
import Button, { ButtonKind, ButtonSize } from '@app/ui/atoms/Button'
import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'

interface Props {
  children: string
  token?: string
  className?: any
  size?: ButtonSize
}

const StartConsultationButton = ({
  token,
  className,
  size,
  openSignUp,
  children,
}: Props & any) =>
  !!token ? (
    <NavLink type={NavLinkType.Nav} href="/client/new-claim">
      <Button size={size} className={className} kind={ButtonKind.Primary}>
        {children}
      </Button>
    </NavLink>
  ) : (
    <Button size={size} className={className} onClick={openSignUp}>
      {children}
    </Button>
  )

const mapState = (state: any) => ({
  token: getToken(state),
})

export default compose<any, Props>(
  connect(mapState),
  withSignUpModal,
)(StartConsultationButton)
