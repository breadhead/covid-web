import IconCustom from '@app/ui/atoms/IconCustom'
import cx from 'classnames'
import * as React from 'react'
import * as styles from './Logo.css'

interface Props {
  className?: string
}

const Logo = ({ className }: Props) => (
  <>
    <IconCustom className={cx(styles.logoFull, className)} name="logo_full" />
    <IconCustom className={cx(styles.logoShort, className)} name="logo_short" />
  </>
)

export default Logo
