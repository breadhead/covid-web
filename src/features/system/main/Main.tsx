import * as React from 'react';
import Head from 'next/head';

import { AppContext } from '@app/src/lib/server-types';
import { getPartnersFromSanity } from '@app/src/domain/reducers/partnerReducer';
import PartnersList from '@app/src/features/landing/features/home/organisms/Corporate/components/Partners/components/PartnersList';
import { HelpPartnersType } from '@app/src/domain/models/common/PartnerTypes';

import { PageType } from '@front/features/landing/features/partners/organisms/PartnersList/config';

import { SystemLayout } from '../layout/SystemLayout';
import { SystemHero } from './components/hero';
import { SystemHelp } from './components/help';
import { SystemAbout } from './components/about';
import { SystemDonation } from './components/donation';

export const SystemMain = () => {
  return (
    <SystemLayout>
      <Head>
        <title>Система борьбы с инфекцией COVID‑19 | Просто спросить</title>
      </Head>
      <SystemHero />
      <div className="gl-wrapper gl-section">
        <SystemHelp />
      </div>
      <div className="gl-wrapper gl-section-inner">
        <SystemAbout />
      </div>
      <div className="gl-wrapper gl-section-inner">
        <PartnersList
          pageType={PageType.Info}
          link={`help-partners?type=${HelpPartnersType.BecomePartner}`}
        />
      </div>
      <SystemDonation />
    </SystemLayout>
  );
};

SystemMain.getInitialProps = async (context: AppContext) => {
  await context.reduxStore.dispatch(getPartnersFromSanity() as any);

  return {};
};
