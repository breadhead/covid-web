import cx from 'classnames'
import * as React from 'react'

import { ChatMessage } from '@app/models/Claim/ChatMessage'
import { ClickableText } from '@front/ui/molecules/clickable-text'

import * as styles from './Message.css'

interface Props {
  message: ChatMessage
}

const Message = ({ message }: Props) => {
  const { author, content, date } = message

  const getFormattedDate = (currentDate: Date) => {
    const currentMinutes = currentDate.getMinutes()
    const minutes =
      `${currentMinutes}`.length < 2 ? `0${currentMinutes}` : currentMinutes
    return `${currentDate.getHours()}:${minutes}`
  }

  return (
    <article
      className={
        !!author ? styles.message : cx(styles.message, styles.messageSent)
      }
    >
      {!!author && <p className={styles.author}>{author}</p>}
      <ClickableText className={styles.content}>{content}</ClickableText>
      <p className={styles.sendingTime}>{getFormattedDate(date)}</p>
    </article>
  )
}

export default Message
