import cx from 'classnames'
import * as React from 'react'

import {
  DateValidationTooltip,
  SelectMonths,
  SelectYears,
} from '@app/features/common/form'

import { MOBILE_WIDTH, SPACE, StylesType } from '@app/lib/config'
import { ClaimData } from '../../../types'
import { schema } from './schema'

interface Props {
  width: number
  styles: StylesType
  claimData: ClaimData
}

const Main = ({ width, styles, claimData }: Props) => (
  <>
    <h2 className={styles.title}>Лечение</h2>
    {!!claimData.localization && (
      <>
        <label htmlFor="diagnosisDate.month" className={styles.label}>
          Когда было диагностировано онкологическое заболевание?
          <span className={styles.secondaryText}>
            {SPACE}Когда вы получили гистологическое заключение
          </span>
        </label>
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
        <DateValidationTooltip
          paths={[
            {
              year: `diagnosisDate.year`,
              month: `diagnosisDate.month`,
            },
          ]}
        />
      </>
    )}
  </>
)

export default Main
