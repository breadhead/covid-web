import React, { useState } from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import { NavLink } from '@app/src/ui/nav-link';
import MediaQuery, { Query } from '@app/src/ui/MediaQuery';
import { RouteType } from '@app/src/lib/routing/RouteType';
import { SystemLogo } from '@app/src/ui/system-logo';

import * as styles from './SystemHeader.css';
import { SystemMobileMenu } from './system-mobile-menu';
import { SystemNavigationContainer } from './navigation/SystemNavigationContainer';

export const SystemHeader = () => {
  const { route } = useRouter();
  const [show, setShow] = useState(true);
  const [narrow, setNarrow] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos.y > -50) {
        setShow(true);
      } else {
        const isShow = currPos.y > prevPos.y;
        if (isShow !== show) {
          setShow(isShow);
        }
      }
      const narrow = currPos.y < -70;

      if (narrow !== show) {
        setNarrow(narrow);
      }
    },
    [show],
    undefined,
    false,
    300,
  );

  return (
    <header
      className={cx(
        styles.headerWrapper,
        show ? styles.show : styles.hide,
        narrow ? styles.narrow : '',
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
