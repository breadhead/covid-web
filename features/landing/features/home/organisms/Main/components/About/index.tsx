import * as React from 'react'

import * as styles from './About.css'

import { NON_BREAKING_SPACE } from '@app/lib/config'

const About = () => (
  <>
    <section className={styles.about}>
      <div className={styles.topic}>
        <h2 className={styles.title}>
          «Просто спросить» помогает разобраться в{NON_BREAKING_SPACE}ситуации и
          снизить нагрузку на систему здравоохранения
        </h2>
        <img
          className={styles.logo}
          src="/static/images/answers.png"
          alt="Помогаем разобраться в ситуации и найти хорошего онколога"
        />
      </div>
      <div className={styles.reasons}>
        <p className={styles.reason}>
          Сервис бесплатный и работает исключительно на благотворительные
          пожертвования.
        </p>
        <p className={styles.reason}>
          Специалисты службы следят за обстановкой, собирают самые актуальные и
          проверенные данные об инфекции.
        </p>
        <p className={styles.reason}>
          Ведущие инфекционисты страны помогают проекту: формируют базу знаний о
          пандемии, обучают врачей-волонтёров.
        </p>
      </div>
    </section>
  </>
)

export default About
