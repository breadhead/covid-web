import * as React from 'react'
import * as styles from './Intro.css'
import cx from 'classnames'
import { NON_BREAKING_SPACE } from '@app/lib/config'
import { Icon } from '@front/ui/icon'
import { NavLink } from '@front/ui/nav-link'
import { IconsList } from '@front/ui/sprite'


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
        href="#donation"
      >
        <span className={styles.buttonText}>Хочу быть в курсе. Как защитить себя и близких?</span>
        <img className={cx(styles.image, styles.imageStudents)}
          src="/static/images/landing/students.png"
          srcSet="/static/images/landing/students2x.png 2x" />
      </NavLink>
      <NavLink
        className={cx(styles.buttonContainer, styles.containerLarge)}
        withoutUnderline
        href="#donation"
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
        <span className={styles.buttonText}>Я врач. Где найти актуальные инструкции?</span>
        <img className={cx(styles.image, styles.imageSmall)}
          src="/static/images/landing/doc.png"
          srcSet="/static/images/landing/doc2x.png 2x" />
      </NavLink>
      <NavLink
        className={cx(styles.buttonContainer, styles.buttonContainerLast)}
        withoutUnderline
        href="#donation"
      >
        <span className={styles.buttonText}>Что делать если диагностировали COVID?</span>
        <img className={cx(styles.image, styles.imageSmall)}
          src="/static/images/landing/crown.png"
          srcSet="/static/images/landing/crown2x.png 2x" />
      </NavLink>
    </div>
  </section>
)

