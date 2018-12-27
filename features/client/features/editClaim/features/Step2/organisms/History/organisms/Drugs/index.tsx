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
import { InputType } from '@app/ui/atoms/Input'
import AddFieldContainer from '@app/ui/organisms/AddFieldContainer'
import { schema } from './schema'

interface Props {
  width: number
  styles: StylesType
}

const EmergingForm = ({ width, styles }: Props) => (
  <>
    <h3 className={styles.subtitle}>Лекарственное лечение</h3>
    <EmergingFormElement
      name="emergingForm"
      className={styles.emergeField}
      controlType={EmergingControlTypes.Switch}
    >
      <AddFieldContainer
        buttonClassName={styles.addButton}
        buttonText="Добавить лекарственное лечение"
      >
        <label htmlFor="choose-city" className={styles.label}>
          Регион, где проходили лечение
        </label>
        <ComboCity
          validate={schema['choose-city']}
          className={styles.historyComboSingle}
          name="choose-city"
        />
        <p className={styles.label}>Когда начали это лечение (месяц и год)</p>
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
        <p className={styles.label}>
          Когда закончили это лечение? (месяц и год)
        </p>
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
        <label htmlFor="choose-clinic" className={styles.label}>
          В какой клинике?
        </label>
        <ComboClinic
          className={styles.historyComboSingle}
          name="choose-clinic"
        />
        <label htmlFor="choose-doctor" className={styles.label}>
          ФИО врача
        </label>
        <Input name="choose-doctor" />
        <label htmlFor="cyclesCount" className={styles.label}>
          Количество циклов
        </label>
        <Input type={InputType.Number} name="cyclesCount" />

        <label htmlFor="choose-procedures" className={styles.label}>
          Схема лечения.
          <span className={styles.secondaryText}>
            {SPACE}Опишите своими словами
          </span>
        </label>
        <TextArea
          validate={schema['choose-procedures']}
          name="choose-procedures"
        />
      </AddFieldContainer>
    </EmergingFormElement>
  </>
)

export default EmergingForm
