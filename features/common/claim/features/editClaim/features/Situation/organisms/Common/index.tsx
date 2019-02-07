import * as React from 'react'

import cx from 'classnames'

import {
  EmergingControlTypes,
  EmergingFormElement,
  Input,
  RemoveSection,
  Select,
  TextArea,
} from '@app/features/common/form'
import { InputType } from '@app/features/common/form'
import { SPACE, StylesType } from '@app/lib/config'
import { mapString } from '@app/ui/atoms/Select'
import AddFieldContainer, {
  SectionDivider,
  SectionHeader,
} from '@app/ui/organisms/AddFieldContainer'
import { ClaimData, SituationClaimFields } from '../../types'
import { CONDITIONAL_THEME } from '../Form/config'
import { localizations, relatives } from './config'
import { schema } from './schema'
interface Props {
  styles: StylesType
  claimData: ClaimData
  initial: Partial<SituationClaimFields>
  removeSectionFromState: RemoveSection
}
const Common = ({
  styles,
  claimData,
  initial,
  removeSectionFromState,
}: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>Общая информация</h2>
    <label htmlFor="description" className={styles.label}>
      Кратко опишите ситуацию.
      <span className={styles.secondaryText}>
        {SPACE}Что случилось? Когда? Какие действия были предприняты?
      </span>
    </label>
    <TextArea validate={schema.description} name="description" />
    {!!claimData.localization && (
      <>
        <label htmlFor="diagnosis" className={styles.label}>
          Диагноз.
          <span className={styles.secondaryText}>
            {SPACE}Можете написать своими словами, если нет точной формулировки
            от врача
          </span>
        </label>
        <TextArea name="diagnosis" />
        <label htmlFor="stage" className={styles.label}>
          Стадия.
          <span className={styles.secondaryText}>
            {SPACE}Укажите, если знаете
          </span>
        </label>
        <Input name="stage" />
      </>
    )}
    <label htmlFor="otherDisease" className={styles.label}>
      Укажите другие заболевания, о которых, как вы считаете, нам надо знать
      (если они есть).
      <span className={styles.secondaryText}>
        {SPACE}Например, инфаркт, инсульт, сахарный диабет, СПИД и другие
        тяжёлые заболевания
      </span>
    </label>
    <TextArea name="otherDisease" />
    {claimData.theme !== CONDITIONAL_THEME && (
      <>
        <label className={styles.label}>
          Болел ли кто-то из кровных родственников онкологическими
          заболеваниями?
        </label>
        <EmergingFormElement
          name="relativesDiseasesPresence"
          className={styles.emergeField}
          defaultVisible={initial.relativesDiseasesPresence}
          validate={schema.relativesDiseasesPresence}
          controlType={EmergingControlTypes.Radiogroup}
        >
          <AddFieldContainer
            initialCount={initial.relativesDiseases!.length}
            buttonClassName={styles.addButton}
            buttonText="Добавить другого родственника"
          >
            {(count, removeSection) =>
              count.map(key => (
                <React.Fragment key={key}>
                  <SectionHeader
                    index={key}
                    onRemoveClick={() =>
                      removeSection(
                        removeSectionFromState(key, 'relativesDiseases'),
                      )
                    }
                  />
                  <label
                    htmlFor={`relativesDiseases.${key}.relative`}
                    className={cx(styles.label, styles.field)}
                  >
                    Кто из родственников
                  </label>
                  <Select
                    name={`relativesDiseases.${key}.relative`}
                    validate={schema.relativesDiseases}
                    options={relatives.map(mapString)}
                  />
                  <label
                    className={cx(
                      styles.label,
                      styles.labelInAddFieldContainer,
                      styles.field,
                    )}
                  >
                    Локализация опухоли
                  </label>
                  <Select
                    name={`relativesDiseases.${key}.localization`}
                    validate={schema.localization}
                    options={localizations.map(mapString)}
                  />

                  <label
                    className={cx(
                      styles.label,
                      styles.labelInAddFieldContainer,
                      styles.field,
                    )}
                  >
                    Возраст, в котором был установлен диагноз
                  </label>
                  <Input
                    validate={schema.diagnosisAge}
                    type={InputType.Number}
                    name={`relativesDiseases.${key}.diagnosisAge`}
                  />
                  <SectionDivider />
                </React.Fragment>
              ))
            }
          </AddFieldContainer>
        </EmergingFormElement>
      </>
    )}
  </article>
)

export default Common
