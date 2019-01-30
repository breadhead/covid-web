import * as React from 'react'

import * as styles from './QuestionNotification.css'

import { NON_BREAKING_SPACE } from '@app/lib/config'
import FinishButton from '../../molecules/FinishButton'

const QuestionNotification = () => (
  <article id="expert-answers" className={styles.questionNotification}>
    <h3 className={styles.title}>
      Эксперт понятно ответил на все ваши вопросы?
    </h3>
    <FinishButton className={styles.button} />
    <p className={styles.text}>
      Если у{NON_BREAKING_SPACE}вас остались вопросы к эксперту, вы можете
      задать их в{NON_BREAKING_SPACE}чате.
      <br />
      Там же вы можете оставить отзыв о{NON_BREAKING_SPACE}работе сервиса.
      <br /> <br />
      Если у вас не{NON_BREAKING_SPACE}осталось вопросов к{NON_BREAKING_SPACE}
      эксперту, нажмите кнопку “Спасибо”.
    </p>
  </article>
)

export default QuestionNotification
