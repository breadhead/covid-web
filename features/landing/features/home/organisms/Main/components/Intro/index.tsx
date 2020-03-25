import * as React from 'react'
import * as styles from './Intro.css'

import { NON_BREAKING_SPACE } from '@app/lib/config'
import { Button, ButtonKind, ButtonSize } from '@front/ui/button'
import { Icon } from '@front/ui/icon'
import { NavLink } from '@front/ui/nav-link'
import { IconsList } from '@front/ui/sprite'
import StartConsultationButton from '../../../../molecules/StartConsultationButton'

const Intro = () => (
  <section className={styles.intro}>
    <h1 className={styles.title}>
      Справочная{NON_BREAKING_SPACE}служба по вопросам коронавируса COVID-19
    </h1>
    <div className={styles.logos}>
      <p className={styles.status}>
        Проект фонда <br /> профилактики рака
      </p>
      <NavLink withoutUnderline href="https://nenaprasno.ru" blank>
        <Icon className={styles.logo} name={IconsList.FoundationLogo} />
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
        withoutUnderline
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
