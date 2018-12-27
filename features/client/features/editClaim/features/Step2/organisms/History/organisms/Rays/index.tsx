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
        <label htmlFor="choose-city" className={styles.label}>
          В каком городе?
        </label>
        <ComboCity
          validate={schema['choose-city']}
          className={styles.historyComboSingle}
          name="choose-city"
        />
        <label htmlFor="choose-clinic" className={styles.label}>
          Название клиники
        </label>
        <ComboClinic
          className={styles.historyComboSingle}
          name="choose-clinic"
        />
        <label htmlFor="choose-doctor" className={styles.label}>
          ФИО врача
        </label>
        <Input name="choose-doctor" />
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
        <label htmlFor="choose-procedures" className={styles.label}>
          Как вас лечил врач в этой клинике?
          <span className={styles.secondaryText}>
            {SPACE}Уточните все лекарства и{NON_BREAKING_SPACE}процедуры
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
