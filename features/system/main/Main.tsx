import * as React from 'react';

import { SystemLayout } from '../layout/SystemLayout';
import { SystemHero } from './components/hero';

// interface SystemMainProps {}

export const SystemMain = () => {
  return (
    <SystemLayout>
      <SystemHero />
    </SystemLayout>
  );
};
