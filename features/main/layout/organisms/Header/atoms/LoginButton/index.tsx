import * as React from 'react'

import {
  withLoginModal,
  WithLoginModal,
} from '@app/features/login/features/signIn'
import Button, { ButtonKind } from '@app/ui/atoms/Button'

interface LoginButtonProps {
  className?: any
}

type Props = LoginButtonProps & WithLoginModal

const LoginButton: React.StatelessComponent<Props> = ({
  className,
  openLogin,
}: Props) => (
  <Button className={className} onClick={openLogin} kind={ButtonKind.Secondary}>
    Войти
  </Button>
)

export default withLoginModal(LoginButton) as any
