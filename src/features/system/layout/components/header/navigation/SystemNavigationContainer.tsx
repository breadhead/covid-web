import * as React from 'react';
import cx from 'classnames';

import { SystemButton } from '@app/src/ui/systemButton /SystemButton';
import { Icon } from '@app/src/ui/icon';
import { NavLink } from '@app/src/ui/nav-link';
import { IconsList } from '@app/src/ui/sprite';

import * as styles from './SystemNavigation.css';
import { SystemNavigation } from './SystemNavigation';

interface Props {
  className?: string;
  hide?: () => void;
}

export const SystemNavigationContainer = ({ className, hide }: Props) => (
  <nav className={styles.navWrapper}>
    <SystemNavigation />
    <NavLink withoutUnderline href="/#donation">
      <SystemButton>Помочь проекту</SystemButton>
    </NavLink>
  </nav>
);
