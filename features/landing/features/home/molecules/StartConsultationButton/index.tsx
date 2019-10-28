import * as React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { getToken } from './selectors'

import { withSignUpModal } from '@app/features/login'
import { Button, ButtonKind, ButtonSize } from '@front/ui/button'
import { NavLink } from '@front/ui/nav-link'

interface Props {
  children: string
  token?: string
  className?: string
  containerClassName?: string
  size?: ButtonSize
}

const StartConsultationButton = ({
  className,
  containerClassName,
  size,
  children,
  token,
}: Props & any) => (
    <NavLink
      className={containerClassName}
      withoutUnderline
      href={
        token
          ? 'client/new-claim/rules/'
          : '/?signUp=true&wantTo=client/new-claim/rules/'
      }
    >
      <Button size={size} className={className} kind={ButtonKind.Primary}>
        {children}
      </Button>
    </NavLink>
  )

const mapState = (state: any) => ({
  token: getToken(state),
})

export default compose<any, Props>(
  connect(mapState),
  withSignUpModal,
)(StartConsultationButton)
