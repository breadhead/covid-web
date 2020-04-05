import React, { useState } from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import { Icon } from '@app/src/ui/icon';
import { IconsList } from '@app/src/ui/sprite';
import { NavLink } from '@app/src/ui/nav-link';
import MediaQuery, { Query } from '@app/src/ui/MediaQuery';
import { RouteType } from '@app/src/lib/routing/RouteType';
import { SystemLogo } from '@app/src/ui/system-logo';

import * as styles from './SystemHeader.css';
import { SystemMobileMenu } from './system-mobile-menu';
import { SystemNavigationContainer } from './navigation/SystemNavigationContainer';

export const SystemHeader = () => {
  const { route } = useRouter();
  const [narrow, setNarrow] = useState(false);

  useScrollPosition(
    (pos) => {
      const isShow = pos.currPos.y < 0;
      if (isShow !== narrow) {
        setNarrow(isShow);
      }
    },
    [narrow],
    undefined,
    false,
    500,
  );

  return (
    <header
      className={cx(
        styles.headerWrapper,
        narrow && styles.narrowHeader,
        route === RouteType.landing && styles.landing,
      )}
    >
      <SystemLogo className={styles.logo} />
      <SystemNavigationContainer narrow={narrow} />
      <MediaQuery className={styles.mobileMenuContainer} query={Query.ToLarge}>
        <NavLink
          className={styles.donationMobileLink}
          withoutUnderline
          href="/#donation"
        >
          Помочь
        </NavLink>
        <SystemMobileMenu />
      </MediaQuery>
    </header>
  );
};
