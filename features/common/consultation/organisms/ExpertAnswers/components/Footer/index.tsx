import * as React from 'react'

import * as styles from './Footer.css'

const Footer = () => (
  <article className={styles.footer}>
    <div className={styles.item}>
      <p className={styles.text}>Ответ загружен</p>
      <p className={styles.date}>27.04.2018</p>
    </div>
    <div className={styles.item}>
      <p className={styles.text}>Ответ обновлён</p>
      <p className={styles.date}>09.08.2018</p>
    </div>
  </article>
)

export default Footer
