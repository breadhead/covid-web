import * as React from 'react'

import cx from 'classnames'

import * as styles from './Message.css'

export interface MessageType {
  id: string
  author?: string
  content: string
  date: string
}

interface Props {
  message: MessageType
}

const Message = ({ message }: Props) => {
  const { author, content, date } = message

  const component = !!author ? (
    <article className={styles.message}>
      <p className={styles.author}>{author}</p>
      <p className={styles.content}>{content}</p>
      <p className={styles.sendingTime}>{date}</p>
    </article>
  ) : (
    <article className={cx(styles.message, styles.messageSent)}>
      <p className={styles.content}>{content}</p>
      <p className={styles.sendingTime}>{date}</p>
    </article>
  )

  return component
}

export default Message
