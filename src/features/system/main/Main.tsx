import * as React from 'react';

import { AppContext } from '@app/src/lib/server-types';
import { getPartnersFromSanity } from '@app/src/domain/reducers/partnerReducer';
import PartnersList from '@app/src/features/landing/features/home/organisms/Corporate/components/Partners/components/PartnersList';

import { SystemLayout } from '../layout/SystemLayout';
import { SystemHero } from './components/hero';
import { SystemHelp } from './components/help';
import { SystemAbout } from './components/about';
import { SystemDonation } from './components/donation';

export const SystemMain = () => {
  return (
    <SystemLayout>
      <SystemHero />
      <SystemHelp />
      <SystemAbout />
      <div className="gl-wrapper gl-section">
        <PartnersList />
      </div>
      <SystemDonation />
    </SystemLayout>
  );
};

SystemMain.getInitialProps = async (context: AppContext) => {
  await context.reduxStore.dispatch(getPartnersFromSanity() as any);

  return {};
};
