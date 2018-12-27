import * as React from 'react'

import cx from 'classnames'

import * as styles from './Message.css'

export interface MessageType {
  id: string
  author?: string
  content: string
  date: Date
}

interface Props {
  message: MessageType
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
