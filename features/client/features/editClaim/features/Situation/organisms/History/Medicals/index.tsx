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

import { InputType } from '@app/features/common/form'
import { SPACE, StylesType } from '@app/lib/config'
import AddFieldContainer from '@app/ui/organisms/AddFieldContainer'
import { schema } from './schema'

interface Props {
  styles: StylesType
}

const EmergingForm = ({ styles }: Props) => (
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
        {count =>
          count.map(key => (
            <React.Fragment key={key}>
              <label
                htmlFor={`medicalsTreatments.${key}.region`}
                className={styles.label}
              >
                Регион, где проходили лечение
              </label>
              <ComboCity
                validate={schema.region}
                className={styles.historyComboSingle}
                name={`medicalsTreatments.${key}.region`}
              />
              <label
                htmlFor={`medicalsTreatments.${key}.when.month`}
                className={styles.label}
              >
                Когда начали это лечение (месяц и год)
              </label>
              <div className={styles.historyComboContainer}>
                <SelectMonths
                  name={`medicalsTreatments.${key}.when.month`}
                  placeholder="Месяц"
                  className={cx(
                    styles.historyCombo,
                    styles.historyComboWrapper,
                  )}
                />
                <SelectYears
                  name={`medicalsTreatments.${key}.when.year`}
                  placeholder="Год"
                  className={cx(
                    styles.historyCombo,
                    styles.historyComboWrapper,
                  )}
                />
              </div>
              <label
                htmlFor={`medicalsTreatments.${key}.end.month`}
                className={styles.label}
              >
                Когда закончили это лечение? (месяц и год)
              </label>
              <div className={styles.historyComboContainer}>
                <SelectMonths
                  name={`medicalsTreatments.${key}.end.month`}
                  placeholder="Месяц"
                  className={cx(
                    styles.historyCombo,
                    styles.historyComboWrapper,
                  )}
                />
                <SelectYears
                  name={`medicalsTreatments.${key}.end.year`}
                  placeholder="Год"
                  className={cx(
                    styles.historyCombo,
                    styles.historyComboWrapper,
                  )}
                />
              </div>
              <label
                htmlFor={`medicalsTreatments.${key}.clinic`}
                className={styles.label}
              >
                В какой клинике?
              </label>
              <ComboClinic
                className={styles.historyComboSingle}
                name={`medicalsTreatments.${key}.clinic`}
              />
              <label
                htmlFor={`medicalsTreatments.${key}.doctor`}
                className={styles.label}
              >
                ФИО врача
              </label>
              <Input name={`medicalsTreatments.${key}.doctor`} />
              <label
                htmlFor={`medicalsTreatments.${key}.cyclesCount`}
                className={styles.label}
              >
                Количество циклов
              </label>
              <Input
                type={InputType.Number}
                name={`medicalsTreatments.${key}.cyclesCount`}
              />

              <label
                htmlFor={`medicalsTreatments.${key}.schema`}
                className={styles.label}
              >
                Схема лечения.
                <span className={styles.secondaryText}>
                  {SPACE}Опишите своими словами
                </span>
              </label>
              <TextArea name={`medicalsTreatments.${key}.schema`} />
            </React.Fragment>
          ))
        }
      </AddFieldContainer>
    </EmergingFormElement>
  </>
)

export default EmergingForm
