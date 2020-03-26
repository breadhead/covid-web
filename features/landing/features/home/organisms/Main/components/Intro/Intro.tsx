import * as React from 'react'
import * as styles from './Intro.css'
import cx from 'classnames'
import { NON_BREAKING_SPACE } from '@app/lib/config'
import { Icon } from '@front/ui/icon'
import { NavLink } from '@front/ui/nav-link'
import { IconsList } from '@front/ui/sprite'

import { CovidButtons } from '../CovidButtons/CovidButtons'


export const Intro = () => (
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
      <NavLink
        className={cx(styles.buttonContainer, styles.containerLarge)}
        withoutUnderline
        href="http://faq.defeatcovid.ru/ru/articles/3831105-%D1%87%D1%82%D0%BE-%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-%D0%B5%D1%81%D0%BB%D0%B8-%D1%83-%D0%B2%D0%B0%D1%81-%D0%B5%D1%81%D1%82%D1%8C-%D1%81%D0%B8%D0%BC%D0%BF%D1%82%D0%BE%D0%BC%D1%8B"
      >
        <span className={styles.buttonText}>Хочу быть в курсе. Как защитить себя и близких?</span>
        <img className={cx(styles.image, styles.imageStudents)}
          src="/static/images/landing/students.png"
          srcSet="/static/images/landing/students2x.png 2x" />
      </NavLink>
      <NavLink
        className={cx(styles.buttonContainer, styles.containerLarge)}
        withoutUnderline
        href="http://faq.defeatcovid.ru/ru/articles/3831105-%D1%87%D1%82%D0%BE-%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-%D0%B5%D1%81%D0%BB%D0%B8-%D1%83-%D0%B2%D0%B0%D1%81-%D0%B5%D1%81%D1%82%D1%8C-%D1%81%D0%B8%D0%BC%D0%BF%D1%82%D0%BE%D0%BC%D1%8B"
      >
        <span className={styles.buttonText}>
          Есть симптомы COVID.
          Что делать?
        </span>
        <img className={cx(styles.image, styles.imagePatient)}
          src="/static/images/landing/withPatient.png"
          srcSet="/static/images/landing/withPatient2x.png 2x" />
      </NavLink>
      <NavLink
        className={cx(styles.buttonContainer, styles.buttonContainerHighlight)}
        withoutUnderline
        href="#donation"
      >
        <span className={styles.buttonTextSmall}>Я врач. Где найти
самые{NON_BREAKING_SPACE}актуальные инструкции?</span>
        <img className={cx(styles.image, styles.imageSmall)}
          src="/static/images/landing/doc.png"
          srcSet="/static/images/landing/doc2x.png 2x" />
      </NavLink>
      <NavLink
        className={cx(styles.buttonContainer, styles.buttonContainerLast)}
        withoutUnderline
        href="#donation"
      >
        <span className={styles.buttonTextSmall}>
          Что делать,
        если{NON_BREAKING_SPACE}диагностировали COVID?</span>
        <img className={cx(styles.image, styles.imageSmall)}
          src="/static/images/landing/crown.png"
          srcSet="/static/images/landing/crown2x.png 2x" />
      </NavLink>
    </div>

    <CovidButtons />

  </section>
)

