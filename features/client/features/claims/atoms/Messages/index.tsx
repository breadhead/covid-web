import cx from 'classnames'

import { ReactNode } from 'react'

import styles from './Messages.css'

interface Props {
  active?: boolean
  title: string
  subtitle?: ReactNode
}

const Messages = ({ active, title, subtitle }: Props) => (
  <section>
    <p className={cx(styles.title, !active && styles.disable)}>{title}</p>
    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
  </section>
)

export default Messages
