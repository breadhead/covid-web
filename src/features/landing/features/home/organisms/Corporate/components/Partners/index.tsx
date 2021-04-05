import * as React from 'react';

import { NON_BREAKING_SPACE } from '@app/src/lib/config';
import { NavLink } from '@app/src/ui/nav-link';

import { PageType } from '@front/features/landing/features/partners/organisms/PartnersList/config';

import * as styles from './Partners.css';
import PartnersList from './components/PartnersList';

const Partners = () => (
  <article className={styles.partners}>
    <div id="about" className={styles.anchor} />
    <h2 className={styles.title}>О проекте</h2>
    <div className={styles.textWrapper}>
      <p className={styles.text}>
        Проект реализует{' '}
        <NavLink className={styles.link} blank href="https://nenaprasno.ru/">
          Фонд медицинских решений
        </NavLink>
        . Мы имеем обширный опыт в организации
        сложных проектов в области медицины и хотим применить его, чтобы
        эпидемия закончилась как можно скорее. Для этого мы объединились с
        {NON_BREAKING_SPACE}коллегами-инфекционистами и решили использовать наши
        ресурсы для совместной работы.
      </p>
      <p className={styles.text}>
        Мы можем значительно снизить нагрузку на систему здравоохранения при
        помощи информирования населения по конкретным вопросам. Как минимум —
        разгрузить службу неотложной помощи, что неизбежно приведет к спасению
        значительного количества жизней тех, кто действительно в ней нуждается.
      </p>
    </div>
    {/* <NavLink className={styles.link} href="/partners">
      Подробнее
    </NavLink> */}
    <PartnersList pageType={PageType.Main} />
  </article>
);

export default Partners;
