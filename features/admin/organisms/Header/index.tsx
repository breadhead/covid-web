import Link from 'next/link'
import React from 'react'

import Button, { ButtonKind, ButtonSize } from '@app/ui/atoms/Button'
import NavLink from '@app/ui/atoms/NavLink'

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
