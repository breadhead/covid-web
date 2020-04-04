import * as React from 'react';
import Head from 'next/head';
import cx from 'classnames';

import { MainLayout } from '@app/src/features/common/layout';
import { SystemLayout } from '@app/src/features/system/layout';

import { BecomePartnerForm } from '../BecomePartnerForm';
import * as styles from './BecomePartnerPage.css';

export const BecomePartnerPage = () => {
  return (
    <SystemLayout className={styles.main}>
      <Head>
        <title>Помочь проекту | Просто спросить</title>
      </Head>

      <section className="gl-wrapper--narrow gl-first-section gl-section">
        <h1 className="gl-pageTitle">Помочь проекту</h1>

        <p className={cx('gl-text', styles.text)}>
          Если вы хотите помочь нам в борьбе с пандемией, заполните, пожалуйста,
          эту анкету.
          <br /> Мы свяжемся с вами, как только нам потребуется ваша помощь.
          Спасибо!
        </p>
        <BecomePartnerForm />
      </section>
    </SystemLayout>
  );
};
