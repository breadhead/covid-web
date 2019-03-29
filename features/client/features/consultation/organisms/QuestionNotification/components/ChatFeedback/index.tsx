import { NON_BREAKING_SPACE } from '@app/lib/config'
import { Icon } from '@front/ui/icon'
import * as React from 'react'
import * as styles from './../../QuestionNotification.css'

interface Props {
  onClick: () => void
}

const ChatFeedback = ({ onClick }: Props) => {
  return (
    <>
      <h3 className={styles.title}>
        Если у вас остались вопросы к{NON_BREAKING_SPACE}эксперту, вы
        {NON_BREAKING_SPACE}можете задать их в{NON_BREAKING_SPACE}
        <span onClick={onClick} className={styles.chatButton}>
          чате
        </span>
        {NON_BREAKING_SPACE}
        <Icon className={styles.icon} name="chat" />
      </h3>
      <p className={styles.text}>
        Там же{NON_BREAKING_SPACE}вы{NON_BREAKING_SPACE}можете оставить отзыв о
        {NON_BREAKING_SPACE}работе сервиса
      </p>
    </>
  )
}

export { ChatFeedback }
