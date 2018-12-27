import cx from 'classnames'
import * as React from 'react'

import {
  ComboCity,
  ComboClinic,
  EmergingControlTypes,
  EmergingFormElement,
  Input,
  SelectYears,
  TextArea,
} from '@app/features/common/form'

import {
  MOBILE_WIDTH,
  NON_BREAKING_SPACE,
  SPACE,
  StylesType,
} from '@app/lib/config'
import AddFieldContainer from '@app/ui/organisms/AddFieldContainer'
import { schema } from './schema'

interface Props {
  width: number
  styles: StylesType
}

const EmergingForm = ({ width, styles }: Props) => (
  <>
    <h3 className={styles.subtitle}>Лучевая терапия</h3>
    <EmergingFormElement
      name="emergingForm"
      className={styles.emergeField}
      controlType={EmergingControlTypes.Switch}
    >
      <AddFieldContainer
        buttonClassName={styles.addButton}
        buttonText="Добавить лучевую терапию"
      >
        <label htmlFor="region" className={styles.label}>
          В каком городе?
        </label>
        <ComboCity
          validate={schema.region}
          className={styles.historyComboSingle}
          name="region"
        />
        <label htmlFor="clinic" className={styles.label}>
          Название клиники
        </label>
        <ComboClinic className={styles.historyComboSingle} name="clinic" />
        <label htmlFor="doctor" className={styles.label}>
          ФИО врача
        </label>
        <Input name="doctor" />
        <p className={styles.label}>Период лечения</p>
        <div className={styles.historyComboContainer}>
          <SelectYears
            name="begin"
            placeholder="Начало"
            className={cx(styles.historyCombo, styles.historyComboWrapper)}
          />
          <SelectYears
            name="end"
            placeholder="Окончание"
            className={cx(styles.historyCombo, styles.historyComboWrapper)}
          />
        </div>
        <label htmlFor="schema" className={styles.label}>
          Схема лечения.
          <span className={styles.secondaryText}>
            {SPACE}Опишите своими словами
          </span>
        </label>
        <TextArea validate={schema.schema} name="schema" />
      </AddFieldContainer>
    </EmergingFormElement>
  </>
)

export default EmergingForm
