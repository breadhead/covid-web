import * as React from 'react'
import * as styles from './Logo.css'

import cx from 'classnames'

interface Props {
  className?: string
}

const Logo = ({ className }: Props) =>
  <img className={cx(styles.logo, className)} src="http://placecorgi.com/238/48" alt="просто спросить" />

export default Logo
