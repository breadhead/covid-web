import RegionSelect from '@app/features/client/features/regionSelect'
import { localizations } from '@app/features/client/values'
import {
  ComboBox,
  EmergingControlTypes,
  EmergingFormElement,
  Input,
  InputType,
  RadioGroup,
} from '@app/features/common/form'
import { StylesType } from '@app/lib/config'
import Gender from '@app/models/Gender'
import { mapString } from '@app/ui/atoms/Select'
import cx from 'classnames'
import * as React from 'react'
import { ShortClaimFields } from '../ClaimForm'
import { schema } from './schema'

const genderRadioGroup = Object.entries(Gender).map(([id, value]) => ({
  id,
  value,
}))

interface Props {
  styles: StylesType
  initial: Partial<ShortClaimFields>
}
const Patient = ({ initial, styles }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>
      Дальше указывайте только данные о том человеке, которого нужно
      проконсультировать
    </h2>
    <label htmlFor="diagnosis" className={styles.label}>
      Есть установленный врачом онкологический диагноз?
    </label>
    <EmergingFormElement
      validate={schema.localizationPresence}
      controlType={EmergingControlTypes.Radiogroup}
      name="localizationPresence"
      defaultVisible={initial.localizationPresence}
    >
      <label
        htmlFor="localization"
        className={cx(styles.label, styles.emergingLabel)}
      >
        Локализация
      </label>
      <ComboBox
        validate={schema.localization}
        name="localization"
        options={localizations.map(mapString)}
        placeholder="Выберите локализацию"
      />
    </EmergingFormElement>
    <RegionSelect
      name="personalData.region"
      region={initial && initial.personalData && initial.personalData.region}
      styles={styles}
      validate={schema.regions}
      textRegion="Регион проживания"
      textCountry="Страна проживания"
      textSwitch="Проживание в России?"
    />
    <label htmlFor="personalData.age" className={styles.label}>
      Возраст (полных лет)
    </label>
    <Input
      className={styles.field}
      validate={schema.age}
      name="personalData.age"
      type={InputType.Number}
    />
    <label htmlFor="personalData.gender" className={styles.label}>
      Пол
    </label>
    <RadioGroup
      className={styles.field}
      validate={schema.gender}
      name="personalData.gender"
      buttons={genderRadioGroup}
    />
  </article>
)

export default Patient
