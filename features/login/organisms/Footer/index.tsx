import * as React from 'react';

import { NON_BREAKING_SPACE, SPACE } from '@app/lib/config';
import { Icon } from '@app/ui/icon';
import { IconsList } from '@app/ui/sprite';

import OpenModalButton from '../../atoms/OpenModalButton';
import styles from './Footer.css';

interface FooterProps {
  onOpenModalClick: () => void;
}

const ModalFooter = ({ onOpenModalClick }: FooterProps) => (
  <footer className={styles.footer}>
    <span className={styles.logoWrap}>
      <Icon className={styles.logo} name={IconsList.FoundationLogoMark} />
    </span>
    <p className={styles.text}>
      Если у вас есть аккаунт на{NON_BREAKING_SPACE}
      <b>nenaprasno.ru</b>, вы{NON_BREAKING_SPACE}
      можете{SPACE}
      <OpenModalButton onClick={onOpenModalClick}>войти</OpenModalButton>,
      используя те
      {NON_BREAKING_SPACE}
      же{NON_BREAKING_SPACE}данные
    </p>
  </footer>
);

export default ModalFooter;
