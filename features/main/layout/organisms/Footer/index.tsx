import * as React from 'react'
import * as styles from './Footer.css'

import NavLink from '@app/ui/atoms/NavLink'
import Button from '@app/ui/molecules/Button'
import Partners from './organisms/Partners'

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.row}>
        <div className={styles.logo}>Просто спросить</div>
        <nav className={styles.menu}>
          <NavLink type="nav" className={styles.link}>Партнёры</NavLink>
          <NavLink type="nav" className={styles.link}>Контакты</NavLink>
          <NavLink type="nav" className={styles.link}>Помочь проекту</NavLink>
          <NavLink type="nav" className={styles.link}>Обратная связь</NavLink>
          <NavLink type="nav" className={styles.link}>Эксперты</NavLink>
        </nav>
        <div>
          <Button kind="secondary">Войти</Button>
          <Button kind="primary">Просто спросить</Button>
        </div>
      </div>
      <div className={styles.row}>
        <Partners />
      </div>
    </footer>
  )
}

export default Footer
