import cx from 'classnames'
import * as React from 'react'

import { NON_BREAKING_SPACE } from '@app/lib/config'

import styles from './Partners.css'

interface Props {
  className?: string
}

const partners = [
  {
    id: '1',
    text: `Системные проекты, которые меняют медицину России к${NON_BREAKING_SPACE}лучшему`,
    logo: '/static/images/layout/footer/foundation_logo.png',
  },
  {
    id: '2',
    text: `Просветительский портал о${NON_BREAKING_SPACE}профилактике и лечении онкологических и${NON_BREAKING_SPACE}
    других заболеваний`,
    logo: '/static/images/layout/footer/media_logo.png',
  },
  {
    id: '3',
    text: `Система определения показаний к${NON_BREAKING_SPACE}профилактике рака`,
    logo: '/static/images/layout/footer/screen_logo.png',
  },
]

const Partners = ({ className }: Props) => (
  <div className={cx(styles.middle, className)}>
    {partners.map(({ id, text, logo }) => (
      <article key={id} className={styles.partner}>
        <p className={styles.text}>{text}</p>
        <img className={styles.logo} src={logo} alt={text} />
      </article>
    ))}
  </div>
)

export default Partners
