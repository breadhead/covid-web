import IconCustom from '@app/ui/atoms/IconCustom'
import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'
import Dropdown from '@app/ui/molecules/Dropdown'
import cx from 'classnames'
import * as styles from './Menu.css'

interface Props {
  signOut: () => void
}

const Menu = ({ signOut }: Props) => (
  <nav className={styles.menu}>
    <NavLink
      className={cx(styles.menuItem, styles.consultation)}
      type={NavLinkType.Nav}
      href="/client"
    >
      <IconCustom className={styles.icon} name="24x24_my-consultation" />
      <span className={styles.menuItemText}>Мои консультации</span>
    </NavLink>
    <div className={styles.menuItem}>
      <Dropdown signOut={signOut} />
    </div>
  </nav>
)

export default Menu
