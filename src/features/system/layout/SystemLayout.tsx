import * as React from 'react';
import cx from 'classnames';

import s from './SystemLayout.css';
import { SystemHeader } from './components/header';
import { SystemFooter } from './components/footer';

interface SystemLayoutProps {
  children: any;
  withoutFooter?: boolean;
  className?: string;
}

export const SystemLayout = ({
  children,
  withoutFooter = false,
  className,
}: SystemLayoutProps) => {
  return (
    <>
      <SystemHeader />
      <main className={cx(s.main, className)}>{children}</main>
      {!withoutFooter && <SystemFooter />}
    </>
  );
};
