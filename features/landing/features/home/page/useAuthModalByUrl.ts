import { useEffect } from 'react';

import { useModal } from '@app/features/common/modal';
import { MODAL_KEY as SIGN_IN_MODAL } from '@app/features/login/features/signIn/const';
import { MODAL_KEY as SIGN_UP_MODAL } from '@app/features/login/features/signUp/const';

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
