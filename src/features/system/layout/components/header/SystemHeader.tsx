import * as React from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';

import { Icon } from '@app/src/ui/icon';
import { IconsList } from '@app/src/ui/sprite';
import { NavLink } from '@app/src/ui/nav-link';
import MediaQuery, { Query } from '@app/src/ui/MediaQuery';
import { RouteType } from '@app/src/lib/routing/RouteType';

import * as styles from './SystemHeader.css';
import { SystemMobileMenu } from './system-mobile-menu';
import { SystemNavigationContainer } from './navigation/SystemNavigationContainer';

export const SystemHeader = () => {
  const { route } = useRouter();

  return (
    <header
      className={cx(
        styles.headerWrapper,
        route === RouteType.landing && styles.landing,
      )}
    >
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
