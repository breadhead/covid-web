import * as React from 'react';
import { Button, ButtonKind } from '@app/src/ui/button';

import * as styles from './AskButton.css'
import { useModal } from '@app/features/common/modal';


const SIGN_IN_MODAL = 'signIn'


interface AskButtonProps {
  children: any
}


export const AskButton = ({ children }: AskButtonProps) => {

  const { open } = useModal()


  return (<Button
    onClick={() => open(SIGN_IN_MODAL)}
    className={styles.button} kind={ButtonKind.Secondary}>
    {children}
  </Button>)
}

