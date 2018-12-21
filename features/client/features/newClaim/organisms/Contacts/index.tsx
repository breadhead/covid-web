import cx from 'classnames'
import * as React from 'react'

import { Input, RadioGroup, Select } from '@app/features/common/form'
import Gender from '@app/models/Gender'
import { InputType } from '@app/ui/atoms/Input'
import { mapString } from '@app/ui/atoms/Select'
import Switch from '@app/ui/atoms/Switch'
import { RadioGroupType } from '@app/ui/molecules/RadioGroup'
import EmergingFormElement from '@app/ui/organisms/EmergingFormElement'

const genderRadioGroup = Object.entries(Gender).map(([id, value]) => ({
  id,
  value,
}))

const regions = ['Москва', 'Томск']
const countries = ['Украина', 'Болгария']

import * as styles from './../ClaimForm/ClaimForm.css'

interface Props {
  clientInRussia: boolean
  onChangeInRussia: (value: boolean) => void
}

const Contacts = ({ clientInRussia, onChangeInRussia }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>Контактные данные</h2>
    <p className={styles.label}>
      Как к вам обращаться?
      <span className={styles.sectondaryText}>
        {' '}
        Вы можете не указывать свою фамилию, если не хотите
      </span>
    </p>
    <Input name="name" />

    <p className={styles.label}>Вы живете в России?</p>
    <Switch
      name="russia"
      onChange={onChangeInRussia}
      checked={clientInRussia}
    />

    {clientInRussia && (
      <>
        <p className={styles.label}>Регион проживания</p>
        <Select
          name="region"
          options={regions.map(mapString)}
          placeholder="Выберите регион"
        />
      </>
    )}

    {!clientInRussia && (
      <>
        <p className={styles.label}>Страна проживания</p>
        <Select
          name="region"
          options={countries.map(mapString)}
          placeholder="Выберите страну"
        />
      </>
    )}

    <p className={styles.label}>Возраст (полных лет)</p>
    <Input name="age" type={InputType.Number} />
    <p className={styles.label}>Пол</p>
    <RadioGroup
      name="gender"
      type={RadioGroupType.Bool}
      buttons={genderRadioGroup}
    />
    <p className={styles.label}>
      Электронная почта.
      <span className={styles.sectondaryText}>
        {' '}
        Будем присылать вам уведомления о ходе консультации.
      </span>
    </p>
    <Input
      name="email"
      type={InputType.Email}
      placeholder="konstantinopolsky@gmail.com"
    />

    <p className={styles.label}>
      Можем ли мы позвонить вам по телефону в случае необходимости?
      <span className={styles.sectondaryText}>
        {' '}
        Так эксперту будет быстрее и проще уточнить у вас информацию при
        необходимости и предоставить более полный ответ.
      </span>
    </p>
    <EmergingFormElement controlType="radiogroup" defaultVisible={true}>
      <p className={cx(styles.label, styles.emergingLabel)}>
        Мобильный телефон
      </p>
      <Input name="phone" type={InputType.Phone} placeholder="+7" />
    </EmergingFormElement>
  </article>
)

export default Contacts
