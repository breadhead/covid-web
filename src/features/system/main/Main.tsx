import * as React from 'react';

import { AppContext } from '@app/src/lib/server-types';
import { getPartnersFromSanity } from '@app/src/domain/reducers/partnerReducer';
import PartnersList from '@app/src/features/landing/features/home/organisms/Corporate/components/Partners/components/PartnersList';

import { PageType } from '@front/features/landing/features/partners/organisms/PartnersList/config';

import { SystemLayout } from '../layout/SystemLayout';
import { SystemHero } from './components/hero';
import { SystemHelp } from './components/help';
import { SystemAbout } from './components/about';
import { SystemDonation } from './components/donation';

export const SystemMain = () => {
  return (
    <SystemLayout>
      <SystemHero />
      <div className="gl-wrapper gl-first-section gl-section">
        <SystemHelp />
      </div>
      <SystemAbout />
      <div className="gl-wrapper gl-section">
        <PartnersList pageType={PageType.Info} />
      </div>
      <SystemDonation />
    </SystemLayout>
  );
};

SystemMain.getInitialProps = async (context: AppContext) => {
  await context.reduxStore.dispatch(getPartnersFromSanity() as any);

  return {};
};
