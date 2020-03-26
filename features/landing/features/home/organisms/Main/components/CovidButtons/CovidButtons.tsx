import * as React from 'react';
import * as styles from './CovidButtons.css';
import { Button, ButtonSize } from '@app/src/ui/button';
import { NavLink } from '@app/src/ui/nav-link';


export const CovidButtons = () => {
  return (
    <div className={styles.buttons}>
      <NavLink className={styles.first} withoutUnderline blank 
      href="http://faq.defeatcovid.ru/ru/">
        <Button size={ButtonSize.ExtraLarge}>Полный справочник по COVID-19</Button>
      </NavLink>
      <NavLink className={styles.last}  withoutUnderline href="/request">
      <Button size={ButtonSize.ExtraLarge}>Персональная консультация</Button>
      </NavLink>
    </div>
  )
}
