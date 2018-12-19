import * as React from 'react'

import Input from '@app/features/common/form/components/Input'
import { InputType } from '@app/ui/atoms/Input'
import Select from '@app/ui/atoms/Select'
import RadioGroup, { RadioGroupType } from '@app/ui/molecules/RadioGroup'

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
    <Select options={mockSelectOptions} placeholder="Выберите регион" />
    <p className={styles.label}>Возраст (полных лет)</p>
    <Input name="age" type={InputType.Number} />
    <p className={styles.label}>Пол</p>
    <RadioGroup
      name="bool"
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
    <Input name="tel" type={InputType.Phone} placeholder="+7" />
  </article>
)

export default Contacts
