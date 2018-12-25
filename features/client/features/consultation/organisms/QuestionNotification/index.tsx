import * as React from 'react'

import * as styles from './QuestionNotification.css'

import Button, { ButtonSize } from '@app/ui/atoms/Button'

interface Props {
  onClick?: () => void
}

const QuestionNotification = ({ onClick }: Props) => (
  <article className={styles.questionNotification}>
    <div>
      <h3 className={styles.title}>
        Эксперт понятно ответил на все ваши вопросы?
      </h3>
      <Button
        onClick={onClick}
        className={styles.button}
        size={ButtonSize.Large}
      >
        Да, cпасибо, мне все понятно
      </Button>
      <p className={styles.text}>
        Если у вас остались вопросы к эксперту, вы можете задать их в чате.
        <br />
        Там же вы можете оставить отзыв о работе сервиса.
        <br /> <br />
        Если у вас не осталось вопросов к эксперту, нажмите кнопку “Спасибо”.
      </p>
    </div>
  </article>
)

export default QuestionNotification
