import * as React from 'react';

import { SystemHeader } from './components/header';
import { SystemFooter } from './components/footer';

interface SystemLayoutProps {
  children: any;
  className?: string;
}

export const SystemLayout = ({ children, className }: SystemLayoutProps) => {
  return (
    <>
      <SystemHeader />
      <main className={className}>{children}</main>
      <SystemFooter />
    </>
  );
};
