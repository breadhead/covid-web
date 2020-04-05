import * as React from 'react';
import { useMappedState } from 'redux-react-hook';

import { useModal } from '@app/src/features/common/modal';
import { SystemButton, SystemButtonSize } from '@app/src/ui/systemButton ';

import * as styles from './AskButton.css';
import { selectToken } from '../../../home/molecules/StartConsultationButton/selectors';

const SIGN_IN_MODAL = 'sign-up';

interface AskButtonProps {
  children: any;
}

export const AskButton = ({ children }: AskButtonProps) => {
  const { open } = useModal();

  const token = useMappedState(selectToken);

  const onButtonClick = () => {
    if (!!token) {
      (window as any).Intercom('show');
    } else {
      open(SIGN_IN_MODAL);
    }
  };

  return (
    <SystemButton
      className={styles.button}
      onClick={onButtonClick}
      size={SystemButtonSize.ExtraLarge}
    >
      {children}
    </SystemButton>
  );
};
