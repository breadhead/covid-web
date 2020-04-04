import * as React from 'react';

import { Button, ButtonSize } from '@app/src/ui/button';
import { NavLink } from '@app/src/ui/nav-link';

import * as styles from './CovidButtons.css';

export const CovidButtons = () => {
  return (
    <div className={styles.buttons}>
      <NavLink
        className={styles.first}
        withoutUnderline
        blank
        href="http://faq.defeatcovid.ru/ru/"
      >
        <Button size={ButtonSize.ExtraLarge}>
          <span>Справочник по COVID-19</span>
          <img
            className={styles.image}
            src="/static/images/landing/check.png"
            alt="Полный справочник по COVID-19"
          />
        </Button>
      </NavLink>
      <NavLink className={styles.last} withoutUnderline href="/request">
        <Button size={ButtonSize.ExtraLarge}>
          <span>Персональная консультация</span>
          <img
            className={styles.image}
            src="/static/images/landing/result.png"
            alt="Полный справочник по COVID-19"
          />
        </Button>
      </NavLink>
    </div>
  );
};
