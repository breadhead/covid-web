import * as React from 'react'
import * as styles from './Count.css'

import { SPACE } from '@app/lib/config'
import { State } from '@app/lib/store'
import cx from 'classnames'
import plural from 'plural-ru'
import { selectSuccessefullClosedClaims } from '@app/src/domain/landing/selectors/selectSuccessefullClosedClaims'
import { useMappedState } from 'redux-react-hook'

const Count = () => {
  const count = useMappedState((state: State) =>
    selectSuccessefullClosedClaims(state),
  )

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
