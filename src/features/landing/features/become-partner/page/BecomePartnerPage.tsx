import * as React from 'react';
import Head from 'next/head';
import cx from 'classnames';

import { SystemLayout } from '@app/src/features/system/layout';

import { BecomePartnerForm } from '../BecomePartnerForm';
import * as styles from './BecomePartnerPage.css';

interface BecomePartnerPage {
  themeValue: string;
}

export const BecomePartnerPage = ({ themeValue }: BecomePartnerPage) => {
  return (
    <SystemLayout className={styles.main}>
      <Head>
        <title>Помочь проекту | Что делать:</title>
      </Head>

      <section className="gl-wrapper--narrow gl-section">
        <h1 className="gl-pageTitle">Помочь проекту</h1>
        <div className={cx('gl-text', styles.text)}>
          <p>
            Текущая ситуация — настоящий вызов для всего мира. Единственное что
            мы действительно можем противопоставить — это объединение всех слоев
            общества и всех типов организаций: некоммерческих, коммерческих или
            государственных. Только объединившись можно использовать общие
            ресурсы максимально рационально и эффективно. Присоединяйтесь.
          </p>

          <p>
            Если вы хотите помочь нам в борьбе с пандемией, пожалуйста,
            заполните эту анкету и мы свяжемся с вами. Спасибо!
          </p>
        </div>
        <BecomePartnerForm themeValue={themeValue} />
      </section>
    </SystemLayout>
  );
};

BecomePartnerPage.getInitialProps = async ({ query }: any) => {
  const themeValue = query.type;

  return { themeValue };
};
