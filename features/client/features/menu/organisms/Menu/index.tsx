import Dropdown from '@app/ui//Dropdown'
import IconCustom from '@app/ui/IconCustom'
import NavLink, { NavLinkType } from '@app/ui/NavLink'
import cx from 'classnames'
import * as styles from './Menu.css'

interface Props {
  signOut: () => void
  className?: string
}

const Menu = ({ signOut, className }: Props) => (
  <nav className={cx(styles.menu, className)}>
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
