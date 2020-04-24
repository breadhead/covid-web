import * as React from 'react';
import Head from 'next/head';
import { useMappedState } from 'redux-react-hook';

import { AppContext } from '@app/src/lib/server-types';
import { getPartnersFromSanity } from '@app/src/domain/reducers/partnerReducer';
import PartnersList from '@app/src/features/landing/features/home/organisms/Corporate/components/Partners/components/PartnersList';
import { HelpPartnersType } from '@app/src/domain/models/common/PartnerTypes';
import { getMainPageListFromSanity } from '@app/src/domain/reducers/newsReducer/mainPageList';
import { selectMainPageNews } from '@app/src/domain/reducers/newsReducer/mainPageList/selectMainPageNews';

import { PageType } from '@front/features/landing/features/partners/organisms/PartnersList/config';

import { SystemLayout } from '../layout/SystemLayout';
import { SystemHero } from './components/hero';
import { SystemHelp } from './components/help';
import { SystemAbout } from './components/about';
import { SystemDonation } from './components/donation';
import { FeaturedNews } from '../../landing/features/news/featuredNews';
import {HospitalsHelpWidget} from "@front/features/common/hospitalsHelpWidget";

export const SystemMain = () => {
  const mainPageNews = useMappedState(selectMainPageNews);
  return (
    <SystemLayout>
      <Head>
        <title>Система борьбы с инфекцией COVID‑19 | Что делать:</title>
      </Head>
      <HospitalsHelpWidget />
      <SystemHero />
      <div className="gl-wrapper gl-section">
        <SystemHelp helpLink={`/?${PageType.Ask}#donation`} />
      </div>
      <div className="gl-wrapper gl-section-inner">
        <SystemAbout />
      </div>
      <div className="gl-wrapper gl-section-inner">
        <PartnersList
          pageType={PageType.Main}
          link={`help-partners?type=${HelpPartnersType.BecomePartner}`}
        />
      </div>
      <SystemDonation pageType={PageType.Hospitals} />
      <div className="gl-wrapper gl-section">
        <FeaturedNews title="Новости и отчеты" list={mainPageNews} />
      </div>
    </SystemLayout>
  );
};

SystemMain.getInitialProps = async (context: AppContext) => {
  const dispatch = context.reduxStore.dispatch;

  await Promise.all[
    (dispatch(getPartnersFromSanity() as any),
    dispatch(getMainPageListFromSanity() as any))
  ];

  return {};
};
