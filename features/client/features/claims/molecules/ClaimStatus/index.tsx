import cx from 'classnames'

import Button, { ButtonKind } from '@app/ui/atoms/Button'

import Point from '../../atoms/Point'
import styles from './ClaimStatus.css'

const Status = () => {
  const active = true

  return (
    <div className={styles.container}>
      <Point active={active} className={styles.point} />
      <section>
        <p className={cx(styles.title, !active && styles.disable)}>
          Мы нашли средства на вашу консультацию. Теперь вы ожете заполнить
          анкету о конца. Мы постараемся помочь вам как можно скорее.
        </p>
        <p className={styles.subtitle}>
          Пожалуйста, постарайтесь дозаполнить заявку до <b>19.09.2019</b>
        </p>
      </section>
      <Button kind={active ? ButtonKind.Primary : ButtonKind.Secondary}>
        Заполнить
      </Button>
    </div>
  )
}

export default Status
