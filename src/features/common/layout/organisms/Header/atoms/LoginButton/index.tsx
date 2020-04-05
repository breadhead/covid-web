import * as React from 'react';

import { Button, ButtonKind } from '@app/src/ui/button';
import withSignInModal, {
  WithSignInModal,
} from '@app/src/features/login/features/signIn/withSignInModal';
import {
  SystemButton,
  SystemButtonKind,
  SystemButtonSize,
} from '@app/src/ui/systemButton ';

interface LoginButtonProps {
  className?: string;
}

type Props = LoginButtonProps & WithSignInModal;

const LoginButton: React.StatelessComponent<Props> = ({
  className,
  openSignIn,
}: Props) => (
  <SystemButton
    className={className}
    onClick={openSignIn}
    size={SystemButtonSize.Small}
    kind={SystemButtonKind.Secondary}
  >
    Войти
  </SystemButton>
);

export default withSignInModal(LoginButton) as any;
