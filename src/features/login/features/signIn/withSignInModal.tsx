import React from 'react';

import { useModal } from '@app/src/features/common/modal';
import { SIGN_IN_MODAL } from '@app/src/features/login';

export interface WithSignInModal {
  openSignIn: () => void;
}

const Container = (Component: React.ComponentType<WithSignInModal>) => (
  props,
) => {
  const { open, close } = useModal();

  return (
    <Component
      {...props}
      close={close}
      openSignIn={() => open(SIGN_IN_MODAL)}
    />
  );
};

export default Container;
