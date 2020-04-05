import { useEffect } from 'react';

import { useModal } from '@app/src/features/common/modal';
import { SIGN_IN_MODAL } from '@app/src/domain/reducers/signInReducer/const';
import { SIGN_UP_MODAL } from '@app/src/domain/reducers/signupReducer/const';

const SIGN_IN_URL = 'signIn';
const SIGN_UP_URL = 'signUp';

export const useAuthModalByUrl = () => {
  const { open } = useModal();

  useEffect(() => {
    const currentPopup = window.location.href;

    if (currentPopup.includes(SIGN_IN_URL)) {
      open(SIGN_IN_MODAL);
      return;
    }

    if (currentPopup.includes(SIGN_UP_URL)) {
      open(SIGN_UP_MODAL);
    }
  }, [open]);
};
