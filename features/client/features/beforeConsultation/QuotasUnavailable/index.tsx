import cx from 'classnames'

import { NON_BREAKING_SPACE } from '@app/lib/config'

import * as styles from './QuotasUnavailable.css'

interface Props {
  className: string
}

export const QuotasUnavailable = ({ className }: Props) => {
  return (
    <p className={cx(styles.text, className)}>
      Сейчас у{NON_BREAKING_SPACE}нас меньше пожертвований, чем необходимо для
      ответов на{NON_BREAKING_SPACE}обращения. Срок рассмотрения заявок может
      увеличиться. Пожалуйста, отнеситесь к{NON_BREAKING_SPACE}этому с
      {NON_BREAKING_SPACE}пониманием.
    </p>
  )
}
