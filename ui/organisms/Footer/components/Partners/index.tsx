import cx from 'classnames'
import * as React from 'react'

import { NON_BREAKING_SPACE } from '@app/lib/config'

import styles from './Partners.css'

import ExternalLink from '@app/ui//ExternalLink'

interface Props {
  className?: string
}

const partners = [
  {
    id: '1',
    text: `Системные проекты, которые меняют медицину России к${NON_BREAKING_SPACE}лучшему`,
    logo: '/static/images/footer/foundation_logo.png',
    href: 'https://nenaprasno.ru',
  },
  {
    id: '2',
    text: `Просветительский портал о${NON_BREAKING_SPACE}профилактике и лечении онкологических и${NON_BREAKING_SPACE}
    других заболеваний`,
    logo: '/static/images/footer/media_logo.png',
    href: 'https://media.nenaprasno.ru',
  },
  {
    id: '3',
    text: `Система определения показаний к${NON_BREAKING_SPACE}профилактике рака`,
    logo: '/static/images/footer/screen_logo.png',
    href: 'https://nenaprasno.ru/screen',
  },
]

const Partners = ({ className }: Props) => (
  <div className={cx(styles.middle, className)}>
    {partners.map(({ id, text, logo, href }) => (
      <ExternalLink key={id} href={href} className={styles.partner}>
        <p className={styles.text}>{text}</p>
        <img className={styles.logo} src={logo} alt={text} />
      </ExternalLink>
    ))}
  </div>
)

export default Partners
