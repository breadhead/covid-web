import * as React from 'react'
import * as styles from './NavIcon.css'

import { Icon } from '@front/ui/icon'
import { IconsList } from '@front/ui/sprite'

const NavIcon = () => (
  <Icon className={styles.NavIcon} name={IconsList.ArrowRight} />
)

export default NavIcon
