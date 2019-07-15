import * as React from 'react'
import { useEffect, useState } from 'react'
import cx from 'classnames'
import plural from 'plural-ru'

import * as styles from './Count.css'
import { useApi } from '@app/lib/api/useApi'
import { SPACE } from '@app/lib/config'

const Count = () => {
  const api = useApi()
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    api.fetchSuccessefulClosedClaims().then(res => {
      setCount(res.num)
    })
  }, [])

  return !!count ? (
    <div className={cx(styles.countWrapper, styles.count)}>
      <p className={styles.number}>{count}</p>
      <p className={styles.label}>
        Успешно проведенных{SPACE}
        {plural(count, 'консультация', 'консультации', 'консультаций')}
      </p>
    </div>
  ) : null
}
export default Count
