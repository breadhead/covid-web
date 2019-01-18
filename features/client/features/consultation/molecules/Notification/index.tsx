import * as React from 'react'

import * as styles from './Notification.css'

import { NON_BREAKING_SPACE } from '@app/lib/config'
import Button, { ButtonSize } from '@app/ui/atoms/Button'

import { notifications } from './notifications'

interface Props {
  status: any
}

const Notification = ({ status }: Props) => {
  const { id, image, title, text, button } = notifications[`${status}`]
  console.log('id:', id, image)
  return (
    <article className={styles.Notification}>
      <img
        className={styles.logo}
        src="http://placecorgi.com/72/72"
        alt="экспертка"
      />
      <div>
        <h3 className={styles.title}>Эксперт ответил на ваши вопросы</h3>
        <p className={styles.text}>
          Если вы хотите что-то уточнить или оставить отзыв, напишите в
          {NON_BREAKING_SPACE}чат{NON_BREAKING_SPACE}в правой части страницы.
        </p>
      </div>
      <Button className={styles.button} size={ButtonSize.Large}>
        Посмотреть ответы эксперта
      </Button>
    </article>
  )
}

export default Notification
