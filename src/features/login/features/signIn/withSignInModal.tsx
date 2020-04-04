import React from 'react';

import { withModal, WithModalProps } from '@app/src/features/common/modal';
import { SIGN_IN_MODAL } from '@app/src/features/login';

export interface WithSignInModal {
  openSignIn: () => void;
}

const Container = (Component: React.ComponentType<WithSignInModal>) =>
  withModal(({ modal, ...props }: WithModalProps) => (
    <Component {...props} openSignIn={() => modal.open(SIGN_IN_MODAL)} />
  ));

export default Container;