import * as React from 'react'
import cx from 'classnames'
import plural from 'plural-ru'

import * as styles from './Count.css'
import { SPACE } from '@app/lib/config'
import { useMappedState } from 'redux-react-hook'
import { selectSuccessefullClosedClaims } from '@app/src/domain/landing/selectors/selectSuccessefullClosedClaims'
import { State } from '@app/lib/store'

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
