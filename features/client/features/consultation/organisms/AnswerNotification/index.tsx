import * as React from 'react'

import * as styles from './AnswerNotification.css'

import { NON_BREAKING_SPACE } from '@app/lib/config'
import Button, { ButtonSize } from '@app/ui/atoms/Button'

const AnswerNotification = () => (
  <article className={styles.answerNotification}>
    <img
      className={styles.logo}
      src="http://placecorgi.com/72/64"
      alt="экспертка"
    />
    <div>
      <h3 className={styles.title}>Эксперт ответил на ваши вопросы</h3>
      <p className={styles.text}>
        Если вы хотите что-то уточнить или оставить отзыв, напишите в чат
        {NON_BREAKING_SPACE}в правой части страницы.
      </p>
    </div>
    <Button className={styles.button} size={ButtonSize.Large}>
      Посмотреть ответы эксперта
    </Button>
  </article>
)

export default AnswerNotification
