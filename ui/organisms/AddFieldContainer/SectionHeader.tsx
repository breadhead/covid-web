import React from 'react';

import { Icon } from '@app/ui/icon';
import { IconsList } from '@app/ui/sprite';

import * as styles from './SectionHeader.css';

export interface SectionHeaderProps {
  index: number;
  onRemoveClick: () => void;
}

const SectionHeader: React.SFC<SectionHeaderProps> = ({
  index,
  onRemoveClick,
}) => {
  switch (index) {
    case 0:
      return null;
    case 1:
      return (
        <div className={styles.header}>
          <p className={styles.text}>Ещё</p>
          <button
            className={styles.button}
            type="button"
            onClick={onRemoveClick}
          >
            <Icon className={styles.icon} name={IconsList.CloseBlue} />
            <span>Удалить</span>
          </button>
        </div>
      );

    default:
      return (
        <div className={styles.header}>
          <button
            type="button"
            className={styles.button}
            onClick={onRemoveClick}
          >
            <Icon className={styles.icon} name={IconsList.CloseBlue} />
            <span>Удалить</span>
          </button>
        </div>
      );
  }
};

export default SectionHeader;
