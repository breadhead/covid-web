import * as React from 'react';
import cx from 'classnames';

import { HospitalAidForm } from '@app/src/features/system/for-clinics/components/form/HospitalAidForm';

import s from './HelpRequest.css';
interface HelpRequestProps {}

export const HelpRequest = ({}: HelpRequestProps) => {
  return (
    <div className={s.helpRequest}>
      <div className={cx('gl-wrapper gl-section', s.wrapper)}>
        <h2 className="gl-sectionTitle">Расскажите, какая помощь вам нужна</h2>
        <div className={s.body}>
          <div className={s.formContainer}>
            <HospitalAidForm />
          </div>
          <div className={s.bubble}>Нужен новый текст!!!</div>
        </div>
      </div>
    </div>
  );
};
