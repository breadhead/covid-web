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

import { SPACE, StylesType } from '@app/lib/config'
import AddFieldContainer from '@app/ui/organisms/AddFieldContainer'
import { SituationClaimFields } from '../../../types'
import { schema } from './schema'

interface Props {
  width: number
  styles: StylesType
  initial: Partial<SituationClaimFields>
}

const EmergingForm = ({ styles, initial }: Props) => (
  <>
    <h3 className={styles.subtitle}>Хирургическое лечение</h3>
    <EmergingFormElement
      defaultVisible={initial.surgicalTreatmentsPresence}
      name="surgicalTreatmentsPresence"
      className={styles.emergeField}
      controlType={EmergingControlTypes.Switch}
    >
      <AddFieldContainer
        buttonClassName={styles.addButton}
        initialCount={initial.surgicalTreatments!.length}
        buttonText="Добавить хирургическое лечение"
      >
        {count =>
          count.map(key => (
            <React.Fragment key={key}>
              <label
                htmlFor={`surgicalTreatments.${key}.region`}
                className={styles.label}
              >
                Регион, где проходили лечение
              </label>
              <ComboCity
                validate={schema.region}
                className={styles.historyComboSingle}
                name={`surgicalTreatments.${key}.region`}
              />
              <label
                htmlFor={`surgicalTreatments.${key}.when.month`}
                className={styles.label}
              >
                Когда проходили это лечение (месяц и год)
              </label>
              <div className={styles.historyComboContainer}>
                <SelectMonths
                  name={`surgicalTreatments.${key}.when.month`}
                  placeholder="Месяц"
                  className={cx(
                    styles.historyCombo,
                    styles.historyComboWrapper,
                  )}
                />
                <SelectYears
                  name={`surgicalTreatments.${key}.when.year`}
                  placeholder="Год"
                  className={cx(
                    styles.historyCombo,
                    styles.historyComboWrapper,
                  )}
                />
              </div>
              <label
                htmlFor={`surgicalTreatments.${key}.clinic`}
                className={styles.label}
              >
                В какой клинике?
              </label>
              <ComboClinic
                className={styles.historyComboSingle}
                name={`surgicalTreatments.${key}.clinic`}
              />
              <label
                htmlFor={`surgicalTreatments.${key}.doctor`}
                className={styles.label}
              >
                ФИО врача
              </label>
              <Input name={`surgicalTreatments.${key}.doctor`} />

              <label
                htmlFor={`surgicalTreatments.${key}.surgery`}
                className={styles.label}
              >
                Суть операции.
                <span className={styles.secondaryText}>
                  {SPACE}Опишите своими словами
                </span>
              </label>
              <TextArea
                validate={schema.surgery}
                name={`surgicalTreatments.${key}.surgery`}
              />
            </React.Fragment>
          ))
        }
      </AddFieldContainer>
    </EmergingFormElement>
  </>
)

export default EmergingForm
