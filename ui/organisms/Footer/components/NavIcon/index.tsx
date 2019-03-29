import * as React from 'react'
import * as styles from './NavIcon.css'

import cx from 'classnames'

import { Icon } from '@front/ui/icon'

interface Props {
  long?: boolean
}

const NavIcon = ({ long = false }: Props) => (
  <Icon
    className={cx(styles.NavIcon, long && styles.long)}
    name="24x24_arrow-small_right"
  />
)

export default NavIcon
