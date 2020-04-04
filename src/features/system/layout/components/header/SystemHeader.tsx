import * as React from 'react';

import { Icon } from '@app/ui/icon';
import { IconsList } from '@app/ui/sprite';
import { NavLink } from '@app/ui/nav-link';
import MediaQuery, { Query } from '@app/ui/MediaQuery';

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
