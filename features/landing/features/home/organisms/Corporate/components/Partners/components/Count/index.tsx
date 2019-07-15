import * as React from 'react'
import { useEffect, useState } from 'react'
import cx from 'classnames'
import plural from 'plural-ru'

import * as styles from './Count.css'
import { SPACE } from '@app/lib/config'

interface Props {
  count: number
}

const Count = ({ count }: Props) => {
  return (
    <div className={cx(styles.countWrapper, styles.count)}>
      <p className={styles.number}>{count}</p>
      <p className={styles.label}>
        Успешно проведенных{SPACE}
        {plural(count, 'консультация', 'консультации', 'консультаций')}
      </p>
    </div>
  )
}
export default Count
