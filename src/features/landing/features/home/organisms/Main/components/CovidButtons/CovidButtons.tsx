import * as React from 'react';

import { NavLink } from '@app/src/ui/nav-link';
import { SystemButton, SystemButtonSize } from '@app/src/ui/systemButton ';

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
        <SystemButton size={SystemButtonSize.ExtraLarge}>
          <span>Справочник по COVID-19</span>
          <img
            className={styles.image}
            src="/static/images/landing/check.png"
            alt="Полный справочник по COVID-19"
          />
        </SystemButton>
      </NavLink>
      <NavLink className={styles.last} withoutUnderline href="/request">
        <SystemButton size={SystemButtonSize.ExtraLarge}>
          <span>Персональная консультация</span>
          <img
            className={styles.image}
            src="/static/images/landing/result.png"
            alt="Полный справочник по COVID-19"
          />
        </SystemButton>
      </NavLink>
    </div>
  );
};
