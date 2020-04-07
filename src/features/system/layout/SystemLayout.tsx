import * as React from 'react';

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
  return (
    <>
      <SystemHeader white={headerWhite} />
      <main className={className}>{children}</main>
      {!withoutFooter && <SystemFooter />}
    </>
  );
};
