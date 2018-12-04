import * as React from 'react'
import * as styles from '../../ClaimForm.css'

import NavLink from '@app/ui/atoms/NavLink'
import { default as RadioGroup, Type as RadioGroupType } from '@app/ui/molecules/RadioGroup'
import Select from '@app/ui/molecules/Select'
import Switch from '@app/ui/molecules/Switch'

import { NON_BREAKING_SPACE, SPACE } from '@app/lib/config'

const statementRadioGroup = [
  { id: '1', value: 'Да' },
  { id: '2', value: 'Нет' },
]

const mockSelectOptions = [
  {
    id: '1',
    value: 'first',
  },
  {
    id: '2',
    value: 'second',
  },
]

const Main = () =>
  <article className={styles.article}>
    <h2 className={styles.title}>Кратко о теме консультации</h2>
    <p className={styles.label}>Для кого эта консультация</p>
    <Select options={mockSelectOptions} name="choose_user" defaultValue="Выберите консультируемого" />
    <p className={styles.label}>Тема вашего вопроса</p>
    <Select options={mockSelectOptions} name="choose_theme" defaultValue="Выберите тему" />
    <p className={styles.label}>У вас есть установленный врачом онкологический диагноз?</p>
    <RadioGroup name="bool" type={RadioGroupType.bool} buttons={statementRadioGroup} />
    <p className={styles.label}>
      Вы консультируетесь по корпоративной программе от своего работодателя?{SPACE}
      <NavLink href="#">
        Узнать{NON_BREAKING_SPACE}больше{NON_BREAKING_SPACE}о{NON_BREAKING_SPACE}программе
      </NavLink>
    </p>
    <Switch name="corp" />
  </article>

export default Main
