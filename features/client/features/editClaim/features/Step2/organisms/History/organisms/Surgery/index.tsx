import cx from 'classnames'
import * as React from 'react'

import {
  ComboCity,
  ComboClinic,
  EmergingControlTypes,
  EmergingFormElement,
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
import { InputType } from '@app/ui/atoms/Input'
import AddFieldContainer from '@app/ui/organisms/AddFieldContainer'
import { schema } from './schema'

interface Props {
  width: number
  styles: StylesType
}

const EmergingForm = ({ styles }: Props) => (
  <>
    <h3 className={styles.subtitle}>Хирургическое лечение</h3>
    <EmergingFormElement
      name="surgicalTreatmentContainer"
      className={styles.emergeField}
      controlType={EmergingControlTypes.Switch}
    >
      <AddFieldContainer
        buttonClassName={styles.addButton}
        buttonText="Добавить хирургическое лечение"
      >
        <label htmlFor="region" className={styles.label}>
          Регион, где проходили лечение
        </label>
        <ComboCity
          validate={schema.region}
          className={styles.historyComboSingle}
          name="region"
        />
        <p className={styles.label}>
          Когда проходили это лечение (месяц и год)
        </p>
        <div className={styles.historyComboContainer}>
          <SelectMonths
            name="month"
            placeholder="Месяц"
            className={cx(styles.historyCombo, styles.historyComboWrapper)}
          />
          <SelectYears
            name="year"
            placeholder="Год"
            className={cx(styles.historyCombo, styles.historyComboWrapper)}
          />
        </div>
        <label htmlFor="clinic" className={styles.label}>
          В какой клинике?
        </label>
        <ComboClinic className={styles.historyComboSingle} name="clinic" />
        <label htmlFor="doctor" className={styles.label}>
          ФИО врача
        </label>
        <Input name="doctor" />

        <label htmlFor="procedures" className={styles.label}>
          Суть операции.
          <span className={styles.secondaryText}>
            {SPACE}Опишите своими словами
          </span>
        </label>
        <TextArea validate={schema.surgery} name="procedures" />
      </AddFieldContainer>
    </EmergingFormElement>
  </>
)

export default EmergingForm
