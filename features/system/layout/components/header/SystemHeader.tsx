import * as React from 'react';

import { Icon } from '@app/src/ui/icon';
import { IconsList } from '@app/src/ui/sprite';
import { NavLink } from '@app/src/ui/nav-link';
import MediaQuery, { Query } from '@app/ui/MediaQuery';

import * as styles from './SystemHeader.css';
import { SystemNavigation } from './navigation';
import { SystemMobileMenu } from './system-mobile-menu';

// interface SystemHeaderProps {}

export const SystemHeader = () => {
  return (
    <header className={styles.headerWrapper}>
      <NavLink className={styles.iconWrapper} withoutUnderline href="/">
        <Icon name={IconsList.SystemLogo} />
      </NavLink>

      <MediaQuery className={styles.buttonContainer} query={Query.ToExtraLarge}>
        <SystemMobileMenu />
      </MediaQuery>
      <MediaQuery className={styles.navContainer} query={Query.FromExtraLarge}>
        <SystemNavigation />
      </MediaQuery>
    </header>
  );
};
