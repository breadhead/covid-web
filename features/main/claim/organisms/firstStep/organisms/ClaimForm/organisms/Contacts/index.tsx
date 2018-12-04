import * as React from 'react'
import * as styles from '../../ClaimForm.css'

import Input from '@app/ui/molecules/Input'
import { default as RadioGroup, Type as RadioGroupType } from '@app/ui/molecules/RadioGroup'
import Select from '@app/ui/molecules/Select'

const genderRadioGroup = [
  { id: '1', value: 'Мужской' },
  { id: '2', value: 'Женский' },
]

const mockSelectOptions = [
  {
    id: '3',
    value: 'third',
  },
  {
    id: '4',
    value: 'fourth',
  },
]

const Contacts = () =>
  <article className={styles.article}>
    <h2 className={styles.title}>Контактные данные</h2>
    <p className={styles.label}>Как к вам обращаться?
  <span className={styles.sectondaryText}> Вы можете не указывать свою фамилию, если не хотите</span>
    </p>
    <Input name="name" type="text" />
    <p className={styles.label}>Регион вашего проживания</p>
    <Select options={mockSelectOptions} name="choose_region" defaultValue="Выберите регион" />
    <p className={styles.label}>Возраст (полных лет)</p>
    <Input name="age" type="number" />
    <p className={styles.label}>Пол</p>
    <RadioGroup name="bool" type={RadioGroupType.bool} buttons={genderRadioGroup} />
    <p className={styles.label}>Электронная почта.
  <span className={styles.sectondaryText}> Будем присылать вам уведомления о ходе консультации.</span>
    </p>
    <Input name="email" type="email" placeholder="konstantinopolsky@gmail.com" />
    <p className={styles.label}>Контактный телефон.
  <span className={styles.sectondaryText}>
        Необязательно, но так нам будет проще и быстрее связаться с вами.
  </span>
    </p>
    <Input name="tel" type="tel" placeholder="+7" />
  </article>

export default Contacts
