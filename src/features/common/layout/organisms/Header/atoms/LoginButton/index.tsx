import * as React from 'react';

import { Button, ButtonKind } from '@app/src/ui/button';
import withSignInModal, {
  WithSignInModal,
} from '@app/src/features/login/features/signIn/withSignInModal';

interface LoginButtonProps {
  className?: string;
}

type Props = LoginButtonProps & WithSignInModal;

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
);

export default withSignInModal(LoginButton) as any;
