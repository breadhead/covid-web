import Dropdown from '@app/ui//Dropdown'
import * as styles from './Menu.css'

interface Props {
  signOut: () => void
}

const Menu = ({ signOut }: Props) => (
  <nav className={styles.menu}>
    <div className={styles.menuItem}>
      <Dropdown signOut={signOut} />
    </div>
  </nav>
)

export default Menu
