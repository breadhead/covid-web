import * as React from 'react'

import * as styles from './About.css'

import StartConsultationButton from '../../../../molecules/StartConsultationButton'

import { NON_BREAKING_SPACE } from '@app/lib/config'

const About = () => (
  <section className={styles.about}>
    <div className={styles.topic}>
      <h2 className={styles.title}>
        Помогаем разобраться в{NON_BREAKING_SPACE}ситуации и{NON_BREAKING_SPACE}
        найти хорошего онколога
      </h2>
      <img
        className={styles.logo}
        src="http://placecorgi.com/72/64"
        alt="Помогаем разобраться в ситуации и найти хорошего онколога"
      />
    </div>
    <div className={styles.reasons}>
      <p className={styles.reason}>
        Сервис бесплатный. Он работает на{NON_BREAKING_SPACE}благотворительные
        пожертвования.
      </p>
      <p className={styles.reason}>
        Мы не{NON_BREAKING_SPACE}финансируемся клиниками и{NON_BREAKING_SPACE}
        работаем только в{NON_BREAKING_SPACE}интересах пациента.
      </p>
      <p className={styles.reason}>
        Мы обладаем экспертизой и{NON_BREAKING_SPACE}постоянно исследуем
        качество лечения рака в{NON_BREAKING_SPACE}России.
      </p>
      <StartConsultationButton className={styles.button}>
        Просто спросить
      </StartConsultationButton>
    </div>
  </section>
)

export default About
