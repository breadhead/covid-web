import * as React from 'react';
import { Action } from 'redux';

import { Icon } from '@app/ui/icon';
import { IconsList } from '@app/ui/sprite';

import * as styles from './CloseButton.css';

interface Props {
  onClick: () => Action;
}

const CloseButton = ({ onClick }: Props) => (
  <button className={styles.button} onClick={onClick}>
    <Icon name={IconsList.CloseLight} />
    закрыть окно
  </button>
);

export default CloseButton;
