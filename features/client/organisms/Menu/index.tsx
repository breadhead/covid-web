import IconCustom from '@app/ui/atoms/IconCustom'
import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'
import Dropdown from '@app/ui/molecules/Dropdown'
import cx from 'classnames'
import * as styles from './Menu.css'

const Menu = () => (
  <nav className={styles.menu}>
    <NavLink
      className={cx(styles.menuItem, styles.consultation)}
      type={NavLinkType.Nav}
      href="#"
    >
      <IconCustom className={styles.icon} name="24x24_my-consultation" />
      <span className={styles.menuItemText}>Моя консультация</span>
    </NavLink>
    <NavLink className={styles.menuItem} type={NavLinkType.Nav} href="#">
      <Dropdown />
    </NavLink>
  </nav>
)

export default Menu
