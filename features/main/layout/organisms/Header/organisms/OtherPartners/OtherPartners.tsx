import * as React from 'react'
import { NavLink } from '@front/ui/nav-link'
import * as styles from './OtherPartners.css'
import cx from 'classnames'

export const OtherPartners = () => {
  return (
    <div className={styles.otherPartners}>
      <div className={styles.tabLinks}>
        <div
          className={cx(styles.tablink, styles.tablinkLight, styles.current)}
        >
          COVID-19
        </div>

        <NavLink
          withoutUnderline
          blank
          className={styles.tablink}
          href="https://ask.nenaprasno.ru/"
        >
          Онкология
        </NavLink>
      </div>

      <div className={styles.links}>
        <NavLink
          withoutUnderline
          blank
          className={styles.link}
          href="https://nenaprasno.ru/"
        >
          Фонд профилактики рака
        </NavLink>
        <NavLink
          withoutUnderline
          blank
          className={styles.link}
          href="https://breadhead.ru/"
        >
          Breadhead
        </NavLink>
      </div>
    </div>
  )
}