import * as React from 'react';
import cx from 'classnames';

import { NON_BREAKING_HYPHEN, NON_BREAKING_SPACE } from '@app/src/lib/config';
import { Icon } from '@app/src/ui/icon';
import { NavLink } from '@app/src/ui/nav-link';
import { IconsList } from '@app/src/ui/sprite';

import * as styles from './Intro.css';
import { CovidButtons } from '../CovidButtons/CovidButtons';

export const Intro = () => (
  <section className={styles.intro}>
    <h1 className={styles.title}>
      Справочная{NON_BREAKING_SPACE}служба по{NON_BREAKING_SPACE}вопросам
      инфекции COVID{NON_BREAKING_HYPHEN}19
    </h1>
    <div className={styles.logos}>
      <NavLink withoutUnderline href="https://nenaprasno.ru" blank>
        <Icon className={styles.logo} name={IconsList.FoundationLogo} />
      </NavLink>
    </div>
    <div className={styles.buttons}>
      <NavLink
        className={cx(styles.buttonContainer, styles.containerLarge)}
        withoutUnderline
        href="http://faq.defeatcovid.ru/ru/articles/3830701-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F-%D0%BF%D0%BE-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B5-covid-2019"
      >
        <span className={styles.buttonText}>
          Хочу быть в курсе. Как защитить себя и близких?
        </span>
        <img
          className={cx(styles.image, styles.imageStudents)}
          src="/static/images/landing/students.png"
          srcSet="/static/images/landing/students2x.png 2x"
        />
      </NavLink>
      <NavLink
        className={cx(styles.buttonContainer, styles.containerLarge)}
        withoutUnderline
        href="http://faq.defeatcovid.ru/ru/articles/3831105-%D1%87%D1%82%D0%BE-%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-%D0%B5%D1%81%D0%BB%D0%B8-%D1%83-%D0%B2%D0%B0%D1%81-%D0%B5%D1%81%D1%82%D1%8C-%D1%81%D0%B8%D0%BC%D0%BF%D1%82%D0%BE%D0%BC%D1%8B"
      >
        <span className={styles.buttonText}>
          Есть симптомы COVID. Что делать?
        </span>
        <img
          className={cx(styles.image, styles.imagePatient)}
          src="/static/images/landing/withPatient.png"
          srcSet="/static/images/landing/withPatient2x.png 2x"
        />
      </NavLink>

      <div className={styles.withHint}>
        <span className={styles.hint}>скоро</span>

        <div
          className={cx(
            styles.buttonContainer,
            styles.buttonContainerHighlight,
            styles.disable,
          )}
        >
          <span className={cx(styles.buttonTextSmall)}>
            Я врач. Где найти самые{NON_BREAKING_SPACE}актуальные инструкции?
          </span>
          <img
            className={cx(styles.image, styles.imageSmall)}
            src="/static/images/landing/doc.png"
            srcSet="/static/images/landing/doc2x.png 2x"
          />
        </div>
      </div>

      <div className={styles.withHint}>
        <span className={styles.hint}>готовим</span>

        <div
          className={cx(
            styles.buttonContainer,
            styles.buttonContainerLast,
            styles.disable,
          )}
        >
          <span className={styles.buttonTextSmall}>
            Что делать, если{NON_BREAKING_SPACE}диагностировали COVID?
          </span>
          <img
            className={cx(styles.image, styles.imageSmall)}
            src="/static/images/landing/crown.png"
            srcSet="/static/images/landing/crown2x.png 2x"
          />
        </div>
      </div>
    </div>

    <CovidButtons />

    <NavLink
      withoutUnderline
      href="#donation"
      className={cx(styles.mobileLink)}
    >
      Помочь проекту
    </NavLink>
  </section>
);
