import * as React from 'react';

import {Button, ButtonKind} from '@app/src/ui/button';

import * as styles from './OpenModalButton.css';

interface Props {
  onClick: () => void;
  children: string;
}

const OpenModalButton = ({ onClick, children }: Props) => (
  <Button
    className={styles.openSignUpButton}
    onClick={onClick}
    kind={ButtonKind.Secondary}
  >
    {children}
  </Button>
);

export default OpenModalButton;
