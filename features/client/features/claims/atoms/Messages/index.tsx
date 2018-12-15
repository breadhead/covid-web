import cx from 'classnames'

import styles from './Messages.css'

interface Props {
  active?: boolean
}

const Messages = ({ active }: Props) => (
  <section>
    <p className={cx(styles.title, !active && styles.disable)}>
      Мы нашли средства на вашу консультацию. Теперь вы ожете заполнить анкету о
      конца. Мы постараемся помочь вам как можно скорее.
    </p>
    <p className={styles.subtitle}>
      Пожалуйста, постарайтесь дозаполнить заявку до <b>19.09.2019</b>
    </p>
  </section>
)

export default Messages
