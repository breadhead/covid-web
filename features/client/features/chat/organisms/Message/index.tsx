import cx from 'classnames'
import * as React from 'react'

import { ChatMessage } from '@app/models/Claim/ChatMessage'

import * as styles from './Message.css'

interface Props {
  message: ChatMessage
}

const Message = ({ message }: Props) => {
  const { author, content, date } = message

  return (
    <article
      className={
        !!author ? styles.message : cx(styles.message, styles.messageSent)
      }
    >
      {!!author && <p className={styles.author}>{author}</p>}
      <p className={styles.content}>{content}</p>
      <p className={styles.sendingTime}>
        {date.getHours()}:{date.getMinutes()}
      </p>
    </article>
  )
}

export default Message
