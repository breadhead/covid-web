import * as React from 'react'
import * as styles from './Intro.css'

import Button, { ButtonKind } from '@app/ui/atoms/Button'
import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'

const Intro = () => (
  <section className={styles.intro}>
    <h1 className={styles.title}>
      Справочная служба для онкологических пациентов и их близких
    </h1>
    <div className={styles.logos}>
      <img
        className={styles.logo}
        src="http://placecorgi.com/130/56"
        alt="Проект Фонда профилактики рака"
      />
      <img
        className={styles.logo}
        src="http://placecorgi.com/130/56"
        alt="Фонд профилактики рака"
      />
    </div>
    <div className={styles.buttons}>
      <NavLink
        type={NavLinkType.Nav}
        className={styles.buttonsItem}
        href="/client/new-claim"
      >
        <Button className={styles.button} kind={ButtonKind.Primary}>
          Начать консультацию
        </Button>
      </NavLink>
      <NavLink type={NavLinkType.Nav} href="#" className={styles.buttonsItem}>
        <Button
          className={styles.button}
          onClick={() => console.log('heeelp')}
          kind={ButtonKind.Secondary}
        >
          Помочь проекту
        </Button>
      </NavLink>
    </div>
  </section>
)

export default Intro
