import {
  EmergingFormElement,
  Input,
  InputType,
  RadioGroup,
  Select,
} from '@app/features/common/form'
import { StylesType } from '@app/lib/config'
import Gender from '@app/models/Gender'
import { mapString } from '@app/ui/atoms/Select'
import Switch from '@app/ui/atoms/Switch'
import { ControlTypes } from '@app/ui/organisms/EmergingFormElement'
import cx from 'classnames'
import * as React from 'react'
import { ShortClaimFields } from '../ClaimForm'
import { countries } from './countries'
import { regions } from './regions'
import { schema } from './schema'

const genderRadioGroup = Object.entries(Gender).map(([id, value]) => ({
  id,
  value,
}))

interface Props {
  clientInRussia: boolean
  onChangeInRussia: (value: boolean) => void
  styles: StylesType
  initial: Partial<ShortClaimFields>
}
const Contacts = ({
  clientInRussia,
  onChangeInRussia,
  styles,
  initial,
}: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>Контактные данные</h2>
    <label htmlFor="personalData.name" className={styles.label}>
      Как к вам обращаться?
      <span className={styles.secondaryText}>
        {' '}
        Вы можете не указывать свою фамилию, если не хотите
      </span>
    </label>
    <Input
      className={styles.field}
      validate={schema.name}
      name="personalData.name"
    />

    <label htmlFor="personalData.russia" className={styles.label}>
      Вы живете в России?
    </label>
    <Switch
      className={styles.field}
      name="personalData.russia"
      onChange={onChangeInRussia}
      checked={clientInRussia}
    />

    {clientInRussia && (
      <>
        <label htmlFor="personalData.region" className={styles.label}>
          Регион проживания
        </label>
        <Select
          className={styles.field}
          validate={schema.regions}
          name="personalData.region"
          options={regions.map(mapString)}
          placeholder={clientInRussia ? 'Выберите регион' : 'Выберите страну'}
        />
      </>
    )}

    {!clientInRussia && (
      <>
        <label htmlFor="personalData.region" className={styles.label}>
          Страна проживания
        </label>
        <Select
          className={styles.field}
          validate={schema.countries}
          name="personalData.region"
          options={countries.map(mapString)}
          placeholder="Выберите страну"
        />
      </>
    )}

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
    <label htmlFor="personalData.email" className={styles.label}>
      Электронная почта.
      <span className={styles.secondaryText}>
        {' '}
        Будем присылать вам уведомления о ходе консультации.
      </span>
    </label>
    <Input
      className={styles.field}
      validate={schema.email}
      name="personalData.email"
      type={InputType.Email}
      placeholder="konstantinopolsky@gmail.com"
    />

    <p className={styles.label}>
      Можем ли мы позвонить вам по телефону в случае необходимости?
      <span className={styles.secondaryText}>
        {' '}
        Так эксперту будет быстрее и проще уточнить у вас информацию при
        необходимости и предоставить более полный ответ.
      </span>
    </p>
    <EmergingFormElement
      className={styles.field}
      controlType={ControlTypes.Radiogroup}
      defaultVisible={initial.phonePresence}
      name="phonePresence"
    >
      <label
        htmlFor="personalData.phone"
        className={cx(styles.label, styles.emergingLabel)}
      >
        Мобильный телефон
      </label>
      <Input
        name="personalData.phone"
        type={InputType.Phone}
        placeholder="+7"
      />
    </EmergingFormElement>
  </article>
)

export default Contacts
