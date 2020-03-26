import * as React from 'react';
import { NavLink } from '@front/ui/nav-link'
import * as styles from './OtherPartners.css'


export const OtherPartners = () => {
  return (
    <div className={styles.otherPartners}>

      <div className={styles.tabLinks}>
        <NavLink blank className={styles.tablink} href="https://nenaprasno.ru/">
          COVID-19
        </NavLink>

        <NavLink blank className={styles.tablink} href="https://nenaprasno.ru/">
          Онкология
        </NavLink>
      </div>

      <div className={styles.links}>
        <NavLink blank className={styles.link} href="https://nenaprasno.ru/">
          Фонд профилактики рака
        </NavLink>
        <NavLink blank className={styles.link} href="https://breadhead.ru/">
          Breadhead
         </NavLink>
      </div>
    </div>
  )
}
