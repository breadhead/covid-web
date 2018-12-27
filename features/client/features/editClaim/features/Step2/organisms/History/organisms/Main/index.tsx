import cx from 'classnames'
import * as React from 'react'

import {
  ComboCity,
  ComboClinic,
  Input,
  SelectMonths,
  SelectYears,
  TextArea,
} from '@app/features/common/form'

import {
  MOBILE_WIDTH,
  NON_BREAKING_SPACE,
  SPACE,
  StylesType,
} from '@app/lib/config'
import { schema } from './schema'

interface Props {
  width: number
  styles: StylesType
}

const Main = ({ width, styles }: Props) => (
  <>
    <h2 className={styles.title}>Лечение</h2>
    <p className={styles.label}>
      Когда было диагностировано онкологическое заболевание?
      <span className={styles.secondaryText}>
        {SPACE}Когда вы получили гистологическое заключение
      </span>
    </p>
    <div className={styles.historyComboContainer}>
      <SelectMonths
        validate={schema.diagnosisDate.month}
        name="diagnosisDate.month"
        isMobile={width < MOBILE_WIDTH}
        className={cx(styles.historyCombo, styles.historyComboWrapper)}
      />
      <SelectYears
        validate={schema.diagnosisDate.year}
        name="diagnosisDate.year"
        isMobile={width < MOBILE_WIDTH}
        className={cx(styles.historyCombo, styles.historyComboWrapper)}
      />
    </div>
  </>
)

export default Main
