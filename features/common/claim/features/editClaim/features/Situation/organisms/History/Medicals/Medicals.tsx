import cx from 'classnames'
import * as React from 'react'

import RegionSelect from '@app/features/client/features/regionSelect'

import {
  DateValidationTooltip,
  EmergingControlTypes,
  EmergingFormElement,
  Input,
  SelectMonths,
  SelectYears,
  TextArea,
  ComboSearch,
} from '@app/features/common/form'
import { SPACE, StylesType } from '@app/lib/config'
import AddFieldContainer, {
  SectionDivider,
  SectionHeader,
} from '@app/ui/organisms/AddFieldContainer'

import { FormContext } from '@app/features/common/form/components/Form'
import { SelectToThisDay } from '@app/features/common/form/components/SelectToThisDay'
import { SituationClaimFields } from '../../../types'
import { ComboSearchType } from '@app/ui/organisms/CustomElements/ComboSearch'
import { useClinicByRegion } from '../../../hooks/useClinicByRegion'
import { HintInputTypes } from '@app/ui/HintInput/HintInput'
import { getValueFromFormContext } from '../../../helpers/getValueFromFormContext'

interface Props {
  styles: StylesType
  initial: Partial<SituationClaimFields>
  formContext: FormContext
}

export const Medicals = ({ styles, initial, formContext }: Props) => {
  const regionClinics = useClinicByRegion(formContext, 'medicalsTreatments')

  return (
    <>
      <h3 className={styles.subtitle}>Лекарственное лечение</h3>
      <EmergingFormElement
        defaultVisible={initial.medicalsTreatmentsPresence}
        name="medicalsTreatmentsPresence"
        className={styles.emergeField}
        controlType={EmergingControlTypes.Switch}
      >
        <AddFieldContainer
          initialCount={initial.medicalsTreatments!.length}
          buttonClassName={styles.addButton}
          buttonText="Добавить лекарственное лечение"
        >
          {(count, removeSection) =>
            count.map(key => (
              <React.Fragment key={key}>
                <SectionHeader
                  index={key}
                  onRemoveClick={() =>
                    removeSection(
                      formContext.removeSectionFromState(
                        key,
                        'medicalsTreatments',
                      ),
                    )
                  }
                />
                <RegionSelect
                  changeField={formContext.changeField}
                  name={`medicalsTreatments.${key}.region`}
                  styles={styles}
                  textRegion="Регион, где проходили лечение"
                  textCountry="Страна, где проходили лечение"
                  textSwitch="Вы проходили лечение в России?"
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

                <SelectToThisDay
                  name={`medicalsTreatments.${key}.end`}
                  formContext={formContext}
                />
                <DateValidationTooltip
                  paths={[
                    {
                      year: `medicalsTreatments.${key}.when.year`,
                      month: `medicalsTreatments.${key}.when.month`,
                    },
                    {
                      year: `medicalsTreatments.${key}.end.year`,
                      month: `medicalsTreatments.${key}.end.month`,
                    },
                  ]}
                />
                <label
                  htmlFor={`medicalsTreatments.${key}.clinic`}
                  className={styles.label}
                >
                  В какой клинике?
                </label>
                <ComboSearch
                  type={ComboSearchType.Clinic}
                  name={`medicalsTreatments.${key}.clinic`}
                  defaultItems={regionClinics}
                  optionsType={HintInputTypes.Complex}
                  region={getValueFromFormContext(
                    formContext,
                    'medicalsTreatments',
                    'region',
                  )}
                />
                <label
                  htmlFor={`medicalsTreatments.${key}.doctor`}
                  className={styles.label}
                >
                  ФИО врача
                </label>
                <ComboSearch
                  type={ComboSearchType.Doctor}
                  name={`medicalsTreatments.${key}.doctor`}
                />
                <label
                  htmlFor={`medicalsTreatments.${key}.cyclesCount`}
                  className={styles.label}
                >
                  Количество циклов лекарственного лечения
                </label>
                <Input name={`medicalsTreatments.${key}.cyclesCount`} />

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
                <SectionDivider />
              </React.Fragment>
            ))
          }
        </AddFieldContainer>
      </EmergingFormElement>
    </>
  )
}
