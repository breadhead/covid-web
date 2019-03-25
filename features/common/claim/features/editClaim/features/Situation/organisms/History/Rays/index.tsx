import RegionSelect from '@app/features/client/features/regionSelect'
import cx from 'classnames'
import * as React from 'react'

import {
  ComboClinic,
  DateValidationTooltip,
  EmergingControlTypes,
  EmergingFormElement,
  Input,
  SelectMonths,
  SelectYears,
  TextArea,
} from '@app/features/common/form'

import { FormContext } from '@app/features/common/form/components/Form'
import { SelectToThisDay } from '@app/features/common/form/components/SelectToThisDay'
import { SPACE, StylesType } from '@app/lib/config'
import AddFieldContainer, {
  SectionDivider,
  SectionHeader,
} from '@app/ui/organisms/AddFieldContainer'
import { SituationClaimFields } from '../../../types'
import { schema } from './schema'

interface Props {
  width: number
  styles: StylesType
  initial: Partial<SituationClaimFields>
  formContext: FormContext
}

const EmergingForm = ({ styles, initial, formContext }: Props) => (
  <>
    <h3 className={styles.subtitle}>Лучевая терапия</h3>
    <EmergingFormElement
      defaultVisible={initial.radiationTreatmentsPresence}
      name="radiationTreatmentsPresence"
      className={styles.emergeField}
      controlType={EmergingControlTypes.Switch}
    >
      <AddFieldContainer
        initialCount={initial.radiationTreatments!.length}
        buttonClassName={styles.addButton}
        buttonText="Добавить лучевую терапию"
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
                      'radiationTreatments',
                    ),
                  )
                }
              />
              <RegionSelect
                changeField={formContext.changeField}
                name={`radiationTreatments.${key}.region`}
                styles={styles}
                textRegion="Регион, где проходили терапию"
                textCountry="Страна, где проходили терапию"
                textSwitch="Вы проходили терапию в России?"
              />
              <label
                htmlFor={`radiationTreatments.${key}.clinic`}
                className={styles.label}
              >
                Название клиники
              </label>
              <ComboClinic
                className={styles.historyComboSingle}
                name={`radiationTreatments.${key}.clinic`}
              />
              <label
                htmlFor={`radiationTreatments.${key}.doctor`}
                className={styles.label}
              >
                ФИО врача
              </label>
              <Input name={`radiationTreatments.${key}.doctor`} />
              <label
                htmlFor={`radiationTreatments.${key}.when.month`}
                className={styles.label}
              >
                Когда начали это лечение? (месяц и год)
              </label>
              <div className={styles.historyComboContainer}>
                <SelectMonths
                  name={`radiationTreatments.${key}.when.month`}
                  placeholder="Месяц"
                  className={cx(
                    styles.historyCombo,
                    styles.historyComboWrapper,
                  )}
                />
                <SelectYears
                  name={`radiationTreatments.${key}.when.year`}
                  placeholder="Год"
                  className={cx(
                    styles.historyCombo,
                    styles.historyComboWrapper,
                  )}
                />
              </div>
              <label
                htmlFor={`radiationTreatments.${key}.end.month`}
                className={styles.label}
              >
                Когда закончили это лечение? (месяц и год)
              </label>
              <SelectToThisDay
                name={`radiationTreatments.${key}.end`}
                formContext={formContext}
              />
              <DateValidationTooltip
                paths={[
                  {
                    year: `radiationTreatments.${key}.when.year`,
                    month: `radiationTreatments.${key}.when.month`,
                  },
                  {
                    year: `radiationTreatments.${key}.end.year`,
                    month: `radiationTreatments.${key}.end.month`,
                  },
                ]}
              />
              <label
                htmlFor={`radiationTreatments.${key}.schema`}
                className={styles.label}
              >
                Схема лечения.
                <span className={styles.secondaryText}>
                  {SPACE}Опишите своими словами
                </span>
              </label>
              <TextArea
                validate={schema.schema}
                name={`radiationTreatments.${key}.schema`}
              />
              <SectionDivider />
            </React.Fragment>
          ))
        }
      </AddFieldContainer>
    </EmergingFormElement>
  </>
)

export default EmergingForm
