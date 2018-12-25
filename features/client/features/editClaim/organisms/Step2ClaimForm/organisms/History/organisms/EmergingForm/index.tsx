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
import { Validator } from '@app/features/common/formHOCs/withFinalForm'
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
  validator: Validator
}

const EmergingForm = ({ width, styles, validator }: Props) => (
  <EmergingFormElement
    name="emergingForm"
    className={styles.emergeField}
    controlType={EmergingControlTypes.Switch}
  >
    <AddFieldContainer
      buttonClassName={styles.addButton}
      buttonText={
        width < MOBILE_WIDTH
          ? 'Добавить ещё место лечения'
          : 'Добавить ещё одно место лечения'
      }
    >
      <label htmlFor="choose-city" className={styles.label}>
        В каком городе?
      </label>
      <ComboCity
        validate={(value: string) => validator(value, schema['choose-city'])}
        className={styles.historyComboSingle}
        name="choose-city"
      />
      <label htmlFor="choose-clinic" className={styles.label}>
        Название клиники
      </label>
      <ComboClinic className={styles.historyComboSingle} name="choose-clinic" />
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
        validate={(value: string) =>
          validator(value, schema['choose-procedures'])
        }
        name="choose-procedures"
      />
    </AddFieldContainer>
  </EmergingFormElement>
)

export default EmergingForm
