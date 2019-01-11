import cx from 'classnames'
import * as React from 'react'

import { Input, RadioGroup, Select } from '@app/features/common/form'

import { InputType } from '@app/features/common/form'
import { StylesType } from '@app/lib/config'
import Gender from '@app/models/Gender'
import { mapString } from '@app/ui/atoms/Select'
import Switch from '@app/ui/atoms/Switch'
import { RadioGroupType } from '@app/ui/molecules/RadioGroup'
import EmergingFormElement from '@app/ui/organisms/EmergingFormElement'
import { RadioButtonsValue } from '@app/ui/organisms/EmergingFormElement/RadioGroupElement'
import { countries, regions } from './config'
import { schema } from './schema'

const genderRadioGroup = Object.entries(Gender).map(([id, value]) => ({
  id,
  value,
}))

interface Props {
  clientInRussia: boolean
  onChangeInRussia: (value: boolean) => void
  styles: StylesType
}
const Contacts = ({ clientInRussia, onChangeInRussia, styles }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>Контактные данные</h2>
    <label htmlFor="name" className={styles.label}>
      Как к вам обращаться?
      <span className={styles.secondaryText}>
        {' '}
        Вы можете не указывать свою фамилию, если не хотите
      </span>
    </label>
    <Input className={styles.field} validate={schema.name} name="name" />

    <label htmlFor="russia" className={styles.label}>
      Вы живете в России?
    </label>
    <Switch
      className={styles.field}
      name="russia"
      onChange={onChangeInRussia}
      checked={clientInRussia}
    />

    {clientInRussia && (
      <>
        <label htmlFor="region" className={styles.label}>
          Регион проживания
        </label>
        <Select
          className={styles.field}
          validate={schema.regions}
          name="region"
          options={regions.map(mapString)}
          placeholder={clientInRussia ? 'Выберите регион' : 'Выберите страну'}
        />
      </>
    )}

    {!clientInRussia && (
      <>
        <label htmlFor="region" className={styles.label}>
          Страна проживания
        </label>
        <Select
          className={styles.field}
          validate={schema.countries}
          name="region"
          options={countries.map(mapString)}
          placeholder="Выберите страну"
        />
      </>
    )}

    <label htmlFor="age" className={styles.label}>
      Возраст (полных лет)
    </label>
    <Input
      className={styles.field}
      validate={schema.age}
      name="age"
      type={InputType.Number}
    />
    <label htmlFor="gender" className={styles.label}>
      Пол
    </label>
    <RadioGroup
      className={styles.field}
      validate={schema.gender}
      name="gender"
      type={RadioGroupType.Bool}
      buttons={genderRadioGroup}
    />
    <label htmlFor="email" className={styles.label}>
      Электронная почта.
      <span className={styles.secondaryText}>
        {' '}
        Будем присылать вам уведомления о ходе консультации.
      </span>
    </label>
    <Input
      className={styles.field}
      validate={schema.email}
      name="email"
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
      controlType="radiogroup"
      defaultVisible={true}
      defaultValue={RadioButtonsValue.Yes}
    >
      <label htmlFor="phone" className={cx(styles.label, styles.emergingLabel)}>
        Мобильный телефон
      </label>
      <Input name="phone" type={InputType.Phone} placeholder="+7" />
    </EmergingFormElement>
  </article>
)

export default Contacts
