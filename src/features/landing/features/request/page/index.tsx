import * as React from 'react';
import Head from 'next/head';

import { AppContext } from '@app/src/lib/server-types';
import { SystemLayout } from '@app/src/features/system/layout';
import Header from '@app/src/features/common/header';
import { AskHeader } from '@app/src/features/common/layout/organisms/Header';

import * as styles from './Request.css';
import { Notification } from '../molecules/Notification';
import { RequestForm } from '../organisms/RequestForm';

interface Props {
  id: string;
}

interface Query {
  id: string;
}

class RequstPage extends React.Component<Props> {
  public static getInitialProps({ query }: AppContext<Query>) {
    const { id } = query;

    return { id };
  }

  public render() {
    return (
      <SystemLayout>
        <AskHeader />
        <Head>
          <title>Новое обращение | Что делать:</title>
        </Head>
        <section className="gl-wrapper gl-section">
          <h1 className={styles.title}>Новое обращение</h1>
          <Notification>
            <p className={styles.text}>
              Консультация в сервисе «Просто спросить о COVID-2019» не является
              медицинской услугой. Эксперты сервиса не ставят диагноз и не назначают
              лечение: это возможно только в медицинском учреждении на очной
              консультации врача.
            </p>
            <p className={styles.text}>
              Врачи-волонтеры «Просто спросить о COVID-201 предоставят вам актуальную
              информацию о заболевании, расскажут о методах профилактики, лечения и
              возможных осложнениях при COVID-19, а также подробно объяснят, что нужно
              делать в вашей ситуации.
            </p>
            <p className={styles.text}>
              Мы делаем все, чтобы вы получали ответы экспертов сервиса как можно
              скорее, но в связи с непростой эпидемиологической ситуацией ожидание
              может занять сутки. Пожалуйста, вызовите скорую, если ваш вопрос требует
              срочного ответа врача!
            </p>
            <p className={styles.text}>
              Сервис работает за счет благотворительных пожертвований и является
              абсолютно бесплатным для всех пользователей.
            </p>
          </Notification>
          <RequestForm />
        </section>
      </SystemLayout>
    );
  }
}

export default RequstPage;
