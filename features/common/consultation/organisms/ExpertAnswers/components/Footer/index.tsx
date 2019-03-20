import * as React from 'react'

import formatDate from '@app/features/client/features/claims/helpers/formatDate'
import * as styles from './Footer.css'

interface Props {
  answeredAt?: Date
  editedAnswer?: Date
}

const Footer = ({ answeredAt, editedAnswer }: Props) =>
  !!answeredAt ? (
    <article className={styles.footer}>
      <div className={styles.item}>
        <p className={styles.text}>Ответ загружен</p>
        <p className={styles.date}>{formatDate(answeredAt)}</p>
      </div>
      {editedAnswer && (
        <div className={styles.item}>
          <p className={styles.text}>Ответ обновлён</p>
          <p className={styles.date}>{formatDate(editedAnswer)}</p>
        </div>
      )}
    </article>
  ) : null

export default Footer
