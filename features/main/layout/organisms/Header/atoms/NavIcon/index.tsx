import * as React from 'react'
import * as styles from './NavIcon.css'

import { IconsList } from '@app/src/ui/sprite'
import { Icon } from '@front/ui/icon'

const NavIcon = () => (
  <Icon className={styles.NavIcon} name={IconsList.ArrowRight} />
)

export default NavIcon
