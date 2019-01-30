import RegionSelect from '@app/features/client/features/regionSelect'
import cx from 'classnames'
import * as React from 'react'

import {
  ComboClinic,
  EmergingControlTypes,
  EmergingFormElement,
  Input,
  RemoveSection,
  SelectMonths,
  SelectYears,
  TextArea,
} from '@app/features/common/form'

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
  removeSectionFromState: RemoveSection
}

const EmergingForm = ({ styles, initial, removeSectionFromState }: Props) => (
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
        {(count, removeSection) =>
          count.map(key => (
            <React.Fragment key={key}>
              <SectionHeader
                index={key}
                onRemoveClick={() =>
                  removeSection(
                    removeSectionFromState(key, 'surgicalTreatments'),
                  )
                }
              />
              <RegionSelect
                name={`surgicalTreatments.${key}.region`}
                styles={styles}
                textRegion="Регион, где проходили лечение"
                textCountry="Страна, где проходили лечение"
                textSwitch="Вы проходили лечение в России?"
              />
              <label
                htmlFor={`surgicalTreatments.${key}.when.month`}
                className={styles.label}
              >
                Когда делали операцию (месяц и год)
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
              <SectionDivider />
            </React.Fragment>
          ))
        }
      </AddFieldContainer>
    </EmergingFormElement>
  </>
)

export default EmergingForm
