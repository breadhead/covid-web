import IconCustom from '@app/ui/atoms/IconCustom'
import cx from 'classnames'
import * as React from 'react'
import styles from './Logo.css'

interface Props {
  className?: string
}

const Logo = ({ className }: Props) => (
  <IconCustom className={cx(styles.logo, className)} name="logo_short" />
)

export default Logo
