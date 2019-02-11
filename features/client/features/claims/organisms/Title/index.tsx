import styles from './Title.css'

import NavLink from '@app/ui/atoms/NavLink'

const Title = () => (
  <header className={styles.container}>
    <h1 className={styles.title}>Мои консультации</h1>
    <NavLink href="/client/new-claim/rules">Начать новую консультацию</NavLink>
  </header>
)

export default Title
