import * as React from 'react';

import {NON_BREAKING_HYPHEN, NON_BREAKING_SPACE} from '@app/src/lib/config';
import {NavLink} from '@app/src/ui/nav-link';
import {Icon} from '@app/src/ui/icon';
import {IconsList} from '@app/src/ui/sprite';

import * as styles from './SystemHero.css';
import {NavCards} from './components/nav-cards';

export const SystemHero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Система борьбы с{NON_BREAKING_SPACE}инфекцией COVID{NON_BREAKING_HYPHEN}
        19
      </h1>

      <NavLink
        className={styles.logoWrapper}
        withoutUnderline
        href="https://nenaprasno.ru"
        blank
      >
        <Icon className={styles.logo} name={IconsList.FoundationLogo} />
      </NavLink>

      <NavCards />
    </section>
  );
};
