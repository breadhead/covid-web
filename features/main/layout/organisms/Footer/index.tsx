import cx from 'classnames'
import * as React from 'react'
import * as styles from './Footer.css'

import Logo from '@app/ui/atoms/Logo'
import NavLink from '@app/ui/atoms/NavLink'
import Button from '@app/ui/molecules/Button'
import Partners from './organisms/Partners'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={cx(styles.row, styles.top)}>
        <Logo />
        <div className={styles.logo}>Просто спросить</div>
        <nav className={styles.menu}>
          <NavLink type="nav" className={styles.link}>Партнёры</NavLink>
          <NavLink type="nav" className={styles.link}>Контакты</NavLink>
          <NavLink type="nav" className={styles.link}>Помочь проекту</NavLink>
          <NavLink type="nav" className={styles.link}>Обратная связь</NavLink>
          <NavLink type="nav" className={styles.link}>Эксперты</NavLink>
        </nav>
        <div className={styles.buttons}>
          <Button wrapperClassName={styles.button} kind="secondary">Войти</Button>
          <Button wrapperClassName={styles.button} kind="primary">Просто спросить</Button>
        </div>
      </div>
      <div className={cx(styles.row, styles.middle)}>
        <Partners />
      </div>
      <div className={cx(styles.row, styles.bottom)}>
        <div className={styles.oncohelp}>
          <span className={styles.copyright}>© Просто спросить, 2018</span>
          <NavLink className={styles.infoLink} type="nav">Пользовательское соглашение</NavLink>
        </div>
        <span className={styles.breadhead}>
          <span className={styles.secondaryText}>Сайт сделан в </span>
          <NavLink className={styles.infoLink} type="nav">Breadhead</NavLink>
        </span>
      </div>
    </footer>
  )
}

export default Footer
