import * as React from 'react';

import { Icon } from '@app/src/ui/icon';
import { IconsList } from '@app/src/ui/sprite';
import { NavLink } from '@app/src/ui/nav-link';
import MediaQuery, { Query } from '@app/src/ui/MediaQuery';

import * as styles from './SystemHeader.css';
import { SystemMobileMenu } from './system-mobile-menu';
import { SystemNavigationContainer } from './navigation/SystemNavigationContainer';

export const SystemHeader = () => {
  return (
    <header className={styles.headerWrapper}>
      <NavLink className={styles.iconWrapper} withoutUnderline href="/">
        <Icon name={IconsList.SystemLogo} />
      </NavLink>

      <MediaQuery
        className={styles.mobileMenuContainer}
        query={Query.ToExtraLarge}
      >
        <NavLink
          className={styles.donationMobileLink}
          withoutUnderline
          href="/#donation"
        >
          Помочь
        </NavLink>
        <SystemMobileMenu />
      </MediaQuery>
      <MediaQuery className={styles.navContainer} query={Query.FromExtraLarge}>
        <SystemNavigationContainer />
      </MediaQuery>
    </header>
  );
};
