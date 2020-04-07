import React, { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

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

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos.y > -64) {
        setShow(false);
      } else {
        const isShow = currPos.y > prevPos.y;
        if (isShow !== show) {
          setShow(isShow);
        }
      }
    },
    [show],
    undefined,
    false,
    100,
  );

  return (
    <>
      <SystemHeader white={headerWhite} />
      <SystemHeader fixed show={show} white={headerWhite} />
      <main className={className}>{children}</main>
      {!withoutFooter && <SystemFooter />}
    </>
  );
};
