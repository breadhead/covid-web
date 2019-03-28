import cx from 'classnames'
import { ReactNode } from 'react'

import * as styles from './ExternalLink.css'

interface Props {
  href: string
  children: ReactNode
  className?: string
}

export const ExternalLink = ({ href, children, className }: Props) => (
  <a
    href={href}
    className={cx(styles.link, className)}
    target="_blank"
    rel="noopener"
  >
    {children}
  </a>
)
