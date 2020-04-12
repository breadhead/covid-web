import * as React from 'react';
import cx from 'classnames';
import Head from 'next/head';
import { useMappedState } from 'redux-react-hook';

import { Divider } from '@app/src/ui/divider/Divider';
import { FeaturedNews } from '@app/src/features/landing/features/news/featuredNews';
import { selectHospitalNews } from '@app/src/domain/reducers/newsReducer/hospitalsList/selectHospitalNews';
import { getNewsForHospitals } from '@app/src/domain/reducers/newsReducer/hospitalsList';

import { SystemLayout } from '../../../layout';
import { Helping } from '../Helping/Helping';
import { HelpRequest } from '../HelpRequest/HelpRequest';
import { SystemHelp } from '../../../main/components/help';
import s from './ForHospitals.css';
import { Partners } from '../Partners/Partners';
import { ForHospitalsHero } from '../Hero/Hero';

interface ForHospitalsProps {}

export const ForHospitalsPage = ({}: ForHospitalsProps) => {
  const newsList = useMappedState(selectHospitalNews);

  return (
    <SystemLayout>
      <Head>
        <title>Больницам | Что делать?</title>
      </Head>

      <div className="gl-wrapper gl-section">
        <ForHospitalsHero />
      </div>
      <div className="gl-wrapper gl-section-inner">
        <Helping />
      </div>
      <HelpRequest />

      <div className="gl-wrapper gl-section">
        <Partners />
      </div>
      <Divider />
      <div className="gl-wrapper gl-section">
        <SystemHelp />
      </div>
      <Divider />
      <div className="gl-wrapper gl-section">
        <FeaturedNews list={newsList} title="Новости и отчеты" />
      </div>
    </SystemLayout>
  );
};

ForHospitalsPage.getInitialProps = async (ctx) => {
  const dispatch = ctx.reduxStore.dispatch;
  await dispatch(getNewsForHospitals() as any);

  return {};
};
