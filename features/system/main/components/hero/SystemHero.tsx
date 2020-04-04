import * as React from 'react';

import {
  NON_BREAKING_SPACE,
  NON_BREAKING_HYPHEN,
} from './node_modules/@app/src/lib/config';
import { NavLink } from './node_modules/@app/ui/nav-link';
import { Icon } from './node_modules/@app/ui/icon';
import { IconsList } from './node_modules/@app/ui/sprite';
import * as styles from './SystemHero.css';
import { NavCards } from './components/nav-cards';

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
