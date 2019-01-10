import * as React from 'react'

import * as styles from './About.css'

import Button from '@app/ui/atoms/Button'

const About = () => (
  <section className={styles.about}>
    <div className={styles.topic}>
      <h2 className={styles.title}>
        Помогаем разобраться в&nbsp;ситуации и&nbsp;найти хорошего онколога
      </h2>
      <img
        className={styles.logo}
        src="http://placecorgi.com/72/64"
        alt="Помогаем разобраться в ситуации и найти хорошего онколога"
      />
    </div>
    <div className={styles.reasons}>
      <p className={styles.reason}>
        Сервис бесплатный. Он работает на&nbsp;благотворительные пожертвования.
      </p>
      <p className={styles.reason}>
        Мы не&nbsp;финансируемся клиниками и&nbsp;работаем только
        в&nbsp;интересах пациента.
      </p>
      <p className={styles.reason}>
        Мы обладаем экспертизой и&nbsp;постоянно исследуем качество лечения рака
        в&nbsp;России.
      </p>
      <Button className={styles.button}>Просто спросить</Button>
    </div>
  </section>
)

export default About
