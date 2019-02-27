import cx from 'classnames'
import * as React from 'react'

import Logo from '@app/ui/atoms/Logo'

import { TargetType } from '@app/ui/atoms/NavLink'
import Legal from '../components/Legal'
import Menu from '../components/Menu'
import FooterTheme from '../FooterTheme'
import * as styles from './SecondaryFooter.css'

interface Props {
  theme?: FooterTheme
}

const SecondaryFooter = ({ theme = FooterTheme.Default }: Props) => (
  <footer className={cx(styles.footer, styles[theme])}>
    <div className={styles.top}>
      <Logo wrapperClassName={styles.logoWrapper} className={styles.logo} />
      <Menu targetType={TargetType.Blank} />
    </div>
    <Legal className={styles.row} />
  </footer>
)

export default SecondaryFooter
