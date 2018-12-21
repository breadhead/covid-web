import cx from 'classnames'
import * as React from 'react'
import * as styles from '../../ClaimForm.css'

import { MOBILE_WIDTH, NON_BREAKING_SPACE, SPACE } from '@app/lib/config'
import Input from '@app/ui/atoms/Input'
import TextArea from '@app/ui/atoms/TextArea'
import AddFieldContainer from '@app/ui/organisms/AddFieldContainer'
import ComboCity from '@app/ui/organisms/CustomElements/ComboCity'
import ComboClinic from '@app/ui/organisms/CustomElements/ComboClinic'
import SelectYears from '@app/ui/organisms/CustomElements/SelectYears'
import EmergingFormElement, {
  controlTypes,
} from '@app/ui/organisms/EmergingFormElement'

interface Props {
  width: number
}

const EmergingForm = ({ width }: Props) => (
  <EmergingFormElement
    className={styles.emergeField}
    controlType={controlTypes.switch}
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
      <ComboCity className={styles.historyComboSingle} name="choose-city" />
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
        <span className={styles.sectondaryText}>
          {SPACE}Уточните все лекарства и{NON_BREAKING_SPACE}процедуры
        </span>
      </label>
      <TextArea name="choose-procedures" />
    </AddFieldContainer>
  </EmergingFormElement>
)

export default EmergingForm
