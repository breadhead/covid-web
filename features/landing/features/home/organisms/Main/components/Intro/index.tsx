import * as React from 'react'
import * as styles from './Intro.css'

import { NON_BREAKING_SPACE } from '@app/lib/config'
import IconCustom from '@app/ui/IconCustom'
import NavLink, { NavLinkType, TargetType } from '@app/ui/NavLink'
import { Button, ButtonKind, ButtonSize } from '@front/ui/button'
import StartConsultationButton from '../../../../molecules/StartConsultationButton'

const Intro = () => (
  <section className={styles.intro}>
    <h1 className={styles.title}>
      Справочная служба для онкологических пациентов и{NON_BREAKING_SPACE}их
      {NON_BREAKING_SPACE}близких
    </h1>
    <div className={styles.logos}>
      <p className={styles.status}>
        Проект фонда <br /> профилактики рака
      </p>
      <NavLink
        type={NavLinkType.Nav}
        href="https://nenaprasno.ru"
        target={TargetType.Blank}
      >
        <IconCustom className={styles.logo} name="foundation-logo" />
      </NavLink>
    </div>
    <div className={styles.buttons}>
      <StartConsultationButton
        containerClassName={styles.buttonContainer}
        className={styles.startButton}
        size={ButtonSize.ExtraLarge}
      >
        Начать консультацию
      </StartConsultationButton>
      <NavLink
        className={styles.buttonContainer}
        type={NavLinkType.Nav}
        href="#donation"
      >
        <Button
          className={styles.button}
          kind={ButtonKind.Secondary}
          size={ButtonSize.ExtraLarge}
        >
          Помочь проекту
        </Button>
      </NavLink>
    </div>
  </section>
)

export default Intro
