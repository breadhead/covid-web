import * as React from 'react';
import cx from 'classnames';

import { NavLink } from '@app/src/ui/nav-link';
import { Button } from '@app/src/ui/button';

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
      href="/#help"
    >
      <Button className={styles.helpButton}>Помочь</Button>
    </NavLink>
  </nav>
);
