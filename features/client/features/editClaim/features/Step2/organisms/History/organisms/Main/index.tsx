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
    <h2 className={styles.title}>История болезни</h2>
    <p className={styles.label}>
      Когда было диагностировано онкологическое заболевание?
    </p>
    <div className={styles.historyComboContainer}>
      <SelectMonths
        validate={schema['diagnos-month']}
        name="diagnos-month"
        isMobile={width < MOBILE_WIDTH}
        className={cx(styles.historyCombo, styles.historyComboWrapper)}
      />
      <SelectYears
        validate={schema['diagnos-year']}
        name="diagnos-year"
        isMobile={width < MOBILE_WIDTH}
        className={cx(styles.historyCombo, styles.historyComboWrapper)}
      />
    </div>
    <label htmlFor="city" className={styles.label}>
      В каком городе?
    </label>
    <ComboCity className={styles.historyComboSingle} name="city" />
    <label htmlFor="clinic" className={styles.label}>
      Название клиники
    </label>
    <ComboClinic className={styles.historyComboSingle} name="clinic" />
    <p className={styles.label}>ФИО врача</p>
    <Input name="doctor" />
    <label htmlFor="procedures" className={styles.label}>
      Как вас лечил врач в этой клинике?
      <span className={styles.secondaryText}>
        {SPACE}Уточните все лекарства и{NON_BREAKING_SPACE}процедуры
      </span>
    </label>
    <TextArea name="procedures" id="procedures" />

    <p className={styles.label}>
      Вы лечились ещё где-нибудь?
      <span className={styles.secondaryText}>
        {SPACE}В том числе нетрадиционные методы лечения
      </span>
    </p>
  </>
)

export default Main
