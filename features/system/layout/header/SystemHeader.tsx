import * as React from 'react';

import { Icon } from '@app/src/ui/icon';
import { IconsList } from '@app/src/ui/sprite';
import { NavLink } from '@app/src/ui/nav-link';

import * as styles from './SystemHeader.css';
import { SystemNavigation } from './navigation';

// interface SystemHeaderProps {}

export const SystemHeader = () => {
  return (
    <header className={styles.headerWrapper}>
      <NavLink className={styles.iconWrapper} withoutUnderline href="/">
        <Icon name={IconsList.SystemLogo} />
      </NavLink>
      <SystemNavigation />
    </header>
  );
};
