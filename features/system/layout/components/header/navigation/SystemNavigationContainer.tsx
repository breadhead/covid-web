import * as React from 'react';
import cx from 'classnames';

import { SystemButton } from '@app/src/ui/systemButton /SystemButton';

import { Icon } from '@front/ui/icon';
import { NavLink } from '@front/ui/nav-link';
import { IconsList } from '@front/ui/sprite';

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
