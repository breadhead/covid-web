import * as React from 'react'

import * as styles from './Footer.css'

import formatDate from '@app/features/client/features/claims/helpers/formatDate'
interface Props {
  createdAt: Date
  editedAt?: Date
}

const Footer = ({ createdAt, editedAt }: Props) => (
  <article className={styles.footer}>
    <div className={styles.item}>
      <p className={styles.text}>Анкета создана</p>
      <p className={styles.date}>{formatDate(createdAt)}</p>
    </div>
    {!!editedAt && (
      <div className={styles.item}>
        <p className={styles.text}>Анкета обновлена</p>
        <p className={styles.date}>{formatDate(editedAt)}</p>
      </div>
    )}
  </article>
)

export default Footer
