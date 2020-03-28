import * as React from 'react'

import * as styles from './Notification.css'

export const Notification = () => (
  <article className={styles.notification}>
    <img
      className={styles.logo}
      src="/static/images/doc-recommendation.png"
      alt="пожертвования"
    />
    <div className={styles.infoWrapper}>
      <p className={styles.text}>
        Консультация в сервисе «Просто спросить о COVID-2019» не является
        медицинской услугой. Эксперты сервиса не ставят диагноз и не назначают
        лечение: это возможно только в медицинском учреждении на очной
        консультации врача.
      </p>
      <p className={styles.text}>
        Врачи-волонтеры «Просто спросить о COVID-201 предоставят вам актуальную
        информацию о заболевании, расскажут о методах профилактики, лечения и
        возможных осложнениях при COVID-19, а также подробно объяснят, что нужно
        делать в вашей ситуации.
      </p>
      <p className={styles.text}>
        Мы делаем все, чтобы вы получали ответы экспертов сервиса как можно
        скорее, но в связи с непростой эпидемиологической ситуацией ожидание
        может занять сутки. Пожалуйста, вызовите скорую, если ваш вопрос требует
        срочного ответа врача!
      </p>
      <p className={styles.text}>
        Сервис работает за счет благотворительных пожертвований и является
        абсолютно бесплатным для всех пользователей.
      </p>

    </div>
  </article>
)

