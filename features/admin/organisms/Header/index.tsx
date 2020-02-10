import signOut from '@app/features/login/features/signOut'
import Link from 'next/link'
import * as React from 'react'
import { useCallback } from 'react'
import { useDispatch } from 'redux-react-hook'

import { Button, ButtonKind, ButtonSize } from '@front/ui/button'
import cx from 'classnames'

import { NavLink } from '@front/ui/nav-link'
import styles from './Header.css'

const Header = () => {
  const dispatch = useDispatch()

  const signOutOfApp = useCallback(() => dispatch(signOut() as any), [])

  return (
    <header className={styles.header}>
      <section className={styles.block}>
        <NavLink href="/admin"> Квоты</NavLink>
        <NavLink href="/admin/history">История операций</NavLink>
        <NavLink href="/admin/stats">Статистика</NavLink>
        <NavLink href="/admin/stories">Истории пациентов</NavLink>
        <NavLink href="/admin/doctors-control">Добавить врача</NavLink>
      </section>

      <section className={cx(styles.block, styles.buttonBlock)}>
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
        <Button
          onClick={signOutOfApp}
          kind={ButtonKind.Secondary}
          size={ButtonSize.Small}
        >
          Выйти
        </Button>
      </section>
    </header>
  )
}
export default Header
