import * as React from 'react';
import cx from 'classnames';

import { SystemLayout } from '../../layout';
import { ForClinicsHero } from '../ForClinicsHero/ForClinicsHero';
import { Helping } from '../Helping/Helping';
import { HelpRequest } from '../HelpRequest/HelpRequest';
import { SystemHelp } from '../../main/components/help';
import s from './ForClinics.css';
import { Partners } from '../Partners/Partners';

interface ForClinicsProps {}

export const ForClinics = ({}: ForClinicsProps) => {
  return (
    <SystemLayout>
      <div className={cx(s.wrapper, s.wrapperOuter)}>
        <ForClinicsHero></ForClinicsHero>
      </div>
      <div className={s.wrapper}>
        <Helping></Helping>
      </div>
      <HelpRequest />

      <div className={s.wrapper}>
        <Partners />
      </div>
      <div className={s.wrapper}>
        <SystemHelp />
      </div>
    </SystemLayout>
  );
};
