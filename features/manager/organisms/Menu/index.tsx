import Dropdown from '@app/ui/molecules/Dropdown'
import * as styles from './Menu.css'

const Menu = () => (
  <nav className={styles.menu}>
    <div className={styles.menuItem}>
      <Dropdown signOut={() => null} />
    </div>
  </nav>
)

export default Menu
