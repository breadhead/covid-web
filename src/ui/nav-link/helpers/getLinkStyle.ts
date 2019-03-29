import * as styles from '../NavLink.css'

export const getLinkStyle = (withoutUnderline: boolean) =>
  withoutUnderline ? styles.nav : styles.link
