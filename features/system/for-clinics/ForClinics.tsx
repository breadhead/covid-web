import * as React from 'react';

import { SystemLayout } from '../layout';
import { ForClinicsHero } from './ForClinicsHero';
import { Helping } from './Helping';
import { HelpRequest } from './HelpRequest';
import { SystemHelp } from '../main/components/help';
import s from './ForClinics.css';

interface ForClinicsProps {}

export const ForClinics = ({}: ForClinicsProps) => {
  return (
    <SystemLayout>
      <div className={s.wrapper}>
        <ForClinicsHero></ForClinicsHero>
        <Helping></Helping>
        <HelpRequest />

        <SystemHelp />
      </div>
    </SystemLayout>
  );
};
