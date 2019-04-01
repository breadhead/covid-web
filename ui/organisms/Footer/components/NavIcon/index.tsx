import * as React from 'react'
import * as styles from './NavIcon.css'

import cx from 'classnames'

import { Icon } from '@front/ui/icon'
import { IconsList } from '@front/ui/sprite'

interface Props {
  long?: boolean
}

const NavIcon = ({ long = false }: Props) => (
  <Icon
    className={cx(styles.NavIcon, long && styles.long)}
    name={IconsList.ArrowRight}
  />
)

export default NavIcon
