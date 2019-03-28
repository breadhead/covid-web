import cx from 'classnames'
import * as React from 'react'

import { NavLink } from '@front/ui/nav-link'

import * as styles from './Legal.css'

import { NON_BREAKING_SPACE } from '@app/lib/config'
import { NavLinkTargetType } from '@app/src/ui/nav-link/NavLinkTargetType'
import { NavLinkType } from '@app/src/ui/nav-link/NavLinkType'
import { ExternalLink } from '@front/ui/external-link'

interface Props {
  className?: string
}

const Legal = ({ className }: Props) => (
  <div className={cx(styles.bottom, className)}>
    <div className={styles.oncohelp}>
      <span className={styles.copyright}>© Просто спросить, 2018</span>
      <NavLink
        target={NavLinkTargetType.Blank}
        className={styles.infoLink}
        type={NavLinkType.Nav}
        href="/static/docs/terms-of-use.pdf"
      >
        Пользовательское соглашение
      </NavLink>
    </div>
    <span className={styles.breadhead}>
      <span className={styles.secondaryText}>
        Сайт сделан в{NON_BREAKING_SPACE}
      </span>
      <ExternalLink className={styles.infoLink} href="https://breadhead.ru/">
        Breadhead
      </ExternalLink>
    </span>
  </div>
)

export default Legal
