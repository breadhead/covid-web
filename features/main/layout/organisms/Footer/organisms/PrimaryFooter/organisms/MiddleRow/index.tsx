import cx from 'classnames'
import * as React from 'react'
import * as styles from './MiddleRow.css'

import Partners from '../Partners'

interface Props {
  className?: string
}

const MiddleRow = ({ className }: Props) =>
  <div className={cx(styles.middle, className)}>
    <Partners />
  </div>

export default MiddleRow
