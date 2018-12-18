import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'

import IconCustom from '@app/ui/atoms/IconCustom'
import * as styles from './Menu.css'

const Menu = () => (
  <nav className={styles.menu}>
    <NavLink className={styles.menuItem} type={NavLinkType.Nav} href="#">
      <IconCustom className={styles.icon} name="24x24_my-consultation" />
      Моя консультация
    </NavLink>
    <NavLink className={styles.menuItem} type={NavLinkType.Nav} href="#">
      <IconCustom className={styles.icon} name="24x24_user" />
    </NavLink>
  </nav>
)

export default Menu
