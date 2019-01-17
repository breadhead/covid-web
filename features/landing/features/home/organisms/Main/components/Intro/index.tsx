import * as React from 'react'
import * as styles from './Intro.css'

import Button, { ButtonKind } from '@app/ui/atoms/Button'
import IconCustom from '@app/ui/atoms/IconCustom'
import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'
import StartConsultationButton from '../../../../molecules/StartConsultationButton'

const Intro = () => (
  <section className={styles.intro}>
    <h1 className={styles.title}>
      Справочная служба для онкологических пациентов и их близких
    </h1>
    <div className={styles.logos}>
      <IconCustom className={styles.logo} name="logo_full" />
      <IconCustom className={styles.logo} name="logo_short" />
    </div>
    <div className={styles.buttons}>
      <StartConsultationButton className={styles.startButton}>
        Начать консультацию
      </StartConsultationButton>
      <NavLink type={NavLinkType.Nav} href="#donation">
        <Button className={styles.button} kind={ButtonKind.Secondary}>
          Помочь проекту
        </Button>
      </NavLink>
    </div>
  </section>
)

export default Intro
