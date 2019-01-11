import * as React from 'react'
import * as styles from './Intro.css'

import { animateScroll as scroll, Link } from 'react-scroll'

import Button, { ButtonKind } from '@app/ui/atoms/Button'
import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'

const Intro = () => {
  const scrollToDonation = () => {
    scroll.scrollTo(0, {
      container: '#donationContainer',
      duration: 300,
      smooth: 'easeInOutQuint',
    })
  }

  return (
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
        <Link
          className={styles.buttonsItem}
          activeClass="active"
          to="#donationContainer"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <Button
            className={styles.button}
            onClick={scrollToDonation}
            kind={ButtonKind.Secondary}
          >
            Помочь проекту
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default Intro
