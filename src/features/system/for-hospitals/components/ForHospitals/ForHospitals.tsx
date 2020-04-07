import * as React from 'react';
import cx from 'classnames';
import Head from 'next/head';

import { Divider } from '@app/src/ui/divider/Divider';

import { SystemLayout } from '../../../layout';
import { Helping } from '../Helping/Helping';
import { HelpRequest } from '../HelpRequest/HelpRequest';
import { SystemHelp } from '../../../main/components/help';
import s from './ForHospitals.css';
import { Partners } from '../Partners/Partners';
import { ForHospitalsHero } from '../Hero/Hero';

interface ForHospitalsProps {}

export const ForHospitalsPage = ({}: ForHospitalsProps) => {
  return (
    <SystemLayout>
      <Head>
        <title>Помощь больницам | Просто спросить</title>
      </Head>

      <div className="gl-wrapper gl-first-section gl-section">
        <ForHospitalsHero></ForHospitalsHero>
      </div>
      <div className="gl-wrapper gl-section">
        <Helping></Helping>
      </div>
      <HelpRequest />

      <div className="gl-wrapper gl-first-section gl-section">
        <Partners />
      </div>
      <Divider />
      <div className="gl-wrapper gl-first-section gl-section">
        <SystemHelp />
      </div>
    </SystemLayout>
  );
};
