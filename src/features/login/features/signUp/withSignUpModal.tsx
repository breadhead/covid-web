import React from 'react';

import { useModal } from '@app/src/features/common/modal';
import { SIGN_UP_MODAL } from '@app/src/domain/reducers/signupReducer/const';

export interface WithSignUpModal {
  openSignUp: () => void;
}

const withSignUpModal = (Component: React.ComponentType<any>) => (props) => {
  const { open, close } = useModal();

  return (
    <Component
      {...props}
      close={close}
      openSignUp={() => open(SIGN_UP_MODAL)}
    />
  );
};

export default withSignUpModal;
