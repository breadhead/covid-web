import * as React from 'react';

import { Icon } from '@app/ui/icon';
import { IconsList } from '@app/ui/sprite';

import * as styles from './BurgerButton.css';

export interface Props {
  show: () => void;
}

const BurgerButton = ({ show }: Props) => (
  <button className={styles.openButton} onClick={show}>
    открыть меню
    <Icon className={styles.NavIcon} name={IconsList.BurgerMenu} />
  </button>
);

export default BurgerButton;
