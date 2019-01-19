import * as React from 'react'

import * as styles from './QuestionNotification.css'

import FinishButton from '../../molecules/FinishButton'

const QuestionNotification = () => (
  <article id="expert-answers" className={styles.questionNotification}>
    <h3 className={styles.title}>
      Эксперт понятно ответил на все ваши вопросы?
    </h3>
    <FinishButton className={styles.button} />
    <p className={styles.text}>
      Если у вас остались вопросы к эксперту, вы можете задать их в чате.
      <br />
      Там же вы можете оставить отзыв о работе сервиса.
      <br /> <br />
      Если у вас не осталось вопросов к эксперту, нажмите кнопку “Спасибо”.
    </p>
  </article>
)

export default QuestionNotification
