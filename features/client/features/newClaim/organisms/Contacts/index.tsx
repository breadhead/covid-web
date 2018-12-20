import * as React from 'react'

import { Input, RadioGroup, Select } from '@app/features/common/form'
import { InputType } from '@app/ui/atoms/Input'
import { RadioGroupType } from '@app/ui/molecules/RadioGroup'

const genderRadioGroup = [
  { id: '1', value: 'Мужской' },
  { id: '2', value: 'Женский' },
]

const mockSelectOptions = [
  {
    key: '3',
    label: 'third',
  },
  {
    key: '4',
    label: 'fourth',
  },
]

import * as styles from './../ClaimForm/ClaimForm.css'

const Contacts = () => (
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
    <p className={styles.label}>Регион вашего проживания</p>
    <Select
      name="region"
      options={mockSelectOptions}
      placeholder="Выберите регион"
    />
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
      Контактный телефон.
      <span className={styles.sectondaryText}>
        Необязательно, но так нам будет проще и быстрее связаться с вами.
      </span>
    </p>
    <Input name="phone" type={InputType.Phone} placeholder="+7" />
  </article>
)

export default Contacts
