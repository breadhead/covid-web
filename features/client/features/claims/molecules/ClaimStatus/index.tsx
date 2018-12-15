import cx from 'classnames'

import Point from '../../atoms/Point'
import styles from './ClaimStatus.css'

const Status = () => {
  const active = true

  return (
    <div className={styles.container}>
      <Point active={active} className={styles.point} />
      <div>
        <p className={cx(styles.title, !active && styles.disable)}>
          Мы нашли средства на вашу консультацию. Теперь вы ожете заполнить
          анкету о конца. Мы постараемся помочь вам как можно скорее.
        </p>
        <p className={styles.subtitle}>
          Пожалуйста, постарайтесь дозаполнить заявку до <b>19.09.2019</b>
        </p>
      </div>
    </div>
  )
}

export default Status
