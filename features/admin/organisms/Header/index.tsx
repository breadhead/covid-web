import Link from 'next/link'
import React from 'react'

import NavLink from '@app/ui/NavLink'
import { Button, ButtonKind, ButtonSize } from '@front/ui/button'

import styles from './Header.css'

const Header = () => (
  <header className={styles.header}>
    <section className={styles.block}>
      <NavLink href="/admin"> Квоты</NavLink>
      <NavLink href="/admin/history">История операций</NavLink>
    </section>

    <section className={styles.block}>
      <Link href="/admin/transfer">
        <Button kind={ButtonKind.Secondary} size={ButtonSize.Small}>
          Сделать перевод
        </Button>
      </Link>
      <Link href="/admin/create-quota">
        <Button kind={ButtonKind.Secondary} size={ButtonSize.Small}>
          Создать новый тип квот
        </Button>
      </Link>
    </section>
  </header>
)

export default Header
