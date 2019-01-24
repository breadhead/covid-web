import RegionSelect from '@app/features/client/features/regionSelect'
import {
  Input,
  InputType,
  PhoneInput,
  RadioGroup,
} from '@app/features/common/form'
import { StylesType } from '@app/lib/config'
import Gender from '@app/models/Gender'
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
const Contacts = ({ initial, styles }: Props) => (
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
    <RegionSelect
      name="personalData.region"
      region={initial && initial.personalData && initial.personalData.region}
      styles={styles}
      textRegion="Регион проживания"
      textCountry="Страна проживания"
      textSwitch="Вы живёте в России?"
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
    <label
      htmlFor="personalData.phone"
      className={cx(styles.label, styles.emergingLabel)}
    >
      Контактный телефон.
      <span className={styles.secondaryText}>
        {' '}
        Необязательно, но так нам будет проще и быстрее связаться с вами.
      </span>
    </label>
    <PhoneInput id="personalData.phone" name="personalData.phone" />
  </article>
)

export default Contacts
