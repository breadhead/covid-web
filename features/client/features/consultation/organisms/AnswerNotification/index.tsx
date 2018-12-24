import * as React from 'react'

import * as styles from './AnswerNotification.css'

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
        <br />в правой части страницы.
      </p>
      <Button size={ButtonSize.Large}>Посмотреть ответы эксперта</Button>
    </div>
  </article>
)

export default AnswerNotification
