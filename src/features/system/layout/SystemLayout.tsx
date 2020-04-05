import * as React from 'react';

import {SystemHeader} from './components/header';
import {SystemFooter} from './components/footer';

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
      <main className={className}>{children}</main>
      {!withoutFooter && <SystemFooter />}
    </>
  );
};
