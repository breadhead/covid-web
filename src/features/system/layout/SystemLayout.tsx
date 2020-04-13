import React, { useState, useEffect } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import cx from 'classnames';
import { useRouter } from 'next/router';

import { RouteType } from '@app/src/lib/routing/RouteType';

import s from './SystemLayout.css';
import { SystemHeader } from './components/header';
import { SystemFooter } from './components/footer';

interface SystemLayoutProps {
  children: any;
  withoutFooter?: boolean;
  headerWhite?: boolean;
  className?: string;
}

export const SystemLayout = ({
  children,
  withoutFooter = false,
  headerWhite,
  className,
}: SystemLayoutProps) => {
  const [show, setShow] = useState(false);
  const [showByRoute, setShowByRoute] = useState(false);
  const { route, asPath } = useRouter();

  useEffect(() => {
    if (asPath.includes('#')) {
      setShowByRoute(true);

      const timerId = setTimeout(() => {
        setShowByRoute(false);
      }, 3000);

      return () => clearTimeout(timerId);
    }
  }, []);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      let isShow;

      if (currPos.y > -64) {
        setShow(false);
      } else {
        isShow = currPos.y > prevPos.y;

        if (showByRoute) {
          isShow = true;
        }

        if (isShow !== show) {
          setShow(isShow);
        }
      }
    },
    [show, showByRoute],
    undefined,
    false,
    100,
  );

  const white = headerWhite || route === RouteType.landing;

  return (
    <>
      <SystemHeader />
      <SystemHeader fixed show={show} />
      <main className={cx(s.main, className)}>{children}</main>
      {!withoutFooter && <SystemFooter />}
    </>
  );
};
