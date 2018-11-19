import NavLink from '@app/ui/atoms/NavLink'
import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'
import styles from './Header.css'

const Header = () =>
  <header className={styles.Header}>
    <h1 className={styles.Title}>Квоты</h1>
    <NavLink className={styles.HistoryLink} href="/admin/history">История операций</NavLink>
    <Link href="/admin/transfer">
      <Button className={styles.ButtonLink}>Сделать перевод</Button>
    </Link>
    <Link href="/admin/create">
      <Button className={styles.ButtonLink}>Создать новый тип квот</Button>
    </Link>
  </header>

export default Header
