import * as React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { getToken } from './selectors'

import { withLoginModal } from '@app/features/login'
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
  openLogin,
  className,
  children,
  size,
}: Props & any) =>
  !!token ? (
    <NavLink type={NavLinkType.Nav} href="/client/new-claim">
      <Button size={size} className={className} kind={ButtonKind.Primary}>
        {children}
      </Button>
    </NavLink>
  ) : (
    <Button size={size} className={className} onClick={openLogin}>
      {children}
    </Button>
  )

const mapState = (state: any) => ({
  token: getToken(state),
})

export default compose<any, Props>(
  connect(mapState),
  withLoginModal,
)(StartConsultationButton)
