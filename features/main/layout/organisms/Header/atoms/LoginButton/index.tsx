import {
  WithSignInModal,
  withSignInModal,
} from '@app/features/login/features/signIn'
import { Button, ButtonKind } from '@front/ui/button'
import * as React from 'react'

interface LoginButtonProps {
  className?: string
}

type Props = LoginButtonProps & WithSignInModal

const LoginButton: React.StatelessComponent<Props> = ({
  className,
  openSignIn,
}: Props) => (
  <Button
    className={className}
    onClick={openSignIn}
    kind={ButtonKind.Secondary}
  >
    Войти
  </Button>
)

export default withSignInModal(LoginButton) as any
