import * as React from 'react';
import Head from 'next/head';
import cx from 'classnames';

import { useThunk } from '@app/src/helpers/hooks/useThunk';
import { saveVolunteerForm } from '@app/src/domain/reducers/requestConsultationReducer/actions';

import { VolunteerForm } from '../VolunteerForm';
import * as styles from './VolunteerPage.css';
import { SystemLayout } from '../../layout';

export const VolunteerPage = () => {
  const dispatch = useThunk();

  const onSubmit = (data: any) => dispatch(saveVolunteerForm(data));

  return (
    <SystemLayout>
      <Head>
        <title>Хочу стать волонтером | Просто спросить</title>
      </Head>

      <div className="gl-wrapper--narrow  gl-section">
        <h1 className="gl-pageTitle">Хочу стать волонтером</h1>
        <p className={cx('gl-text', styles.text)}>
          Если вы хотите помочь нам в борьбе с пандемией, заполните, пожалуйста,
          эту анкету. Мы свяжемся с вами, как только нам потребуется ваша
          помощь. Спасибо!
        </p>
        <div className="gl-formContainer">
          <VolunteerForm onSubmit={onSubmit} />
        </div>
      </div>
    </SystemLayout>
  );
};
