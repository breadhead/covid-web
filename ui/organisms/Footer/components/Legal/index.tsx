import cx from 'classnames'
import * as React from 'react'

import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'

import * as styles from './Legal.css'

import ExternalLink from '@app/ui/molecules/ExternalLink'
interface Props {
  className?: string
}

const Legal = ({ className }: Props) => (
  <div className={cx(styles.bottom, className)}>
    <div className={styles.oncohelp}>
      <span className={styles.copyright}>© Просто спросить, 2018</span>
      <NavLink className={styles.infoLink} type={NavLinkType.Nav} href="#">
        Пользовательское соглашение
      </NavLink>
    </div>
    <span className={styles.breadhead}>
      <span className={styles.secondaryText}>Сайт сделан в </span>
      <ExternalLink className={styles.infoLink} href="https://breadhead.ru/">
        Breadhead
      </ExternalLink>
    </span>
  </div>
)

export default Legal
