import * as React from 'react';
import * as styles from './CovidButtons.css';
import { Button, ButtonSize } from '@app/src/ui/button';
import { NavLink } from '@app/src/ui/nav-link';


export const CovidButtons = () => {
  return (
    <div className={styles.buttons}>
      <NavLink className={styles.first} withoutUnderline blank href="http://faq.defeatcovid.ru/ru/articles/3830701-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B5-covid-2019">
        <Button size={ButtonSize.ExtraLarge}>Полный справочник по COVID-19</Button>
      </NavLink>
      <NavLink className={styles.last}  withoutUnderline href="/request">
      <Button size={ButtonSize.ExtraLarge}>Персональная консультация</Button>
      </NavLink>
    </div>
  )
}
