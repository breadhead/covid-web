import * as React from 'react';
import cx from 'classnames';

import { SystemButton } from '@app/src/ui/systemButton /SystemButton';
import { NavLink } from '@app/src/ui/nav-link';

import * as styles from './SystemNavigation.css';
import { SystemNavigation } from './SystemNavigation';

interface Props {
  narrow?: boolean;
}

export const SystemNavigationContainer = ({ narrow }: Props) => (
  <nav className={styles.navWrapper}>
    <SystemNavigation narrow={narrow} />
    <NavLink
      className={cx(styles.buttonWrap, narrow && styles.narrowButtonWrap)}
      withoutUnderline
      href="/#donation"
    >
      <SystemButton className={styles.helpButton}>Помочь проекту</SystemButton>
    </NavLink>
  </nav>
);
