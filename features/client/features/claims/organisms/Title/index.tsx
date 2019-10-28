import React from 'react'
import styles from './Title.css'

import { NavLink } from '@front/ui/nav-link'

const Title = () => (
  <header className={styles.container}>
    <h1 className={styles.title}>Мои консультации</h1>
    <NavLink href="client/new-claim/rules/">Начать новую консультацию</NavLink>
  </header>
)

export default Title
