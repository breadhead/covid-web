import cx from 'classnames'
import * as React from 'react'

import {
  ComboBox,
  EmergingFormElement,
  Input,
  Select,
  TextArea,
} from '@app/features/common/form'
import { NON_BREAKING_SPACE, SPACE } from '@app/lib/config'
import NavLink from '@app/ui/atoms/NavLink'

import * as styles from './../ClaimForm/ClaimForm.css'

const mockSelectOptions = [
  {
    key: 'self',
    label: 'Для себя',
  },
  {
    key: 'other',
    label: 'Для другого человека',
  },
]

const Main = () => (
  <article className={styles.article}>
    <h2 className={styles.title}>Кратко о теме консультации</h2>
    <p className={styles.label}>Для кого эта консультация</p>
    <Select
      name="personal"
      options={mockSelectOptions}
      placeholder="Выберите консультируемого"
    />
    <p className={styles.label}>Тема вашего вопроса</p>
    <Select
      name="theme"
      options={mockSelectOptions}
      placeholder="Выберите тему"
    />
    <p className={styles.label}>
      У вас есть установленный врачом онкологический диагноз?
    </p>
    <EmergingFormElement controlType="radiogroup" name="diagnosis">
      <p className={cx(styles.label, styles.emergingLabel)}>Локализация</p>
      <ComboBox
        name="localization"
        options={mockSelectOptions}
        placeholder="Выберите локализацию"
      />
    </EmergingFormElement>
    <p className={styles.emergingLabel}>
      Вы консультируетесь по корпоративной программе от своего работодателя?
      {SPACE}
      <NavLink href="#">
        Узнать{NON_BREAKING_SPACE}больше{NON_BREAKING_SPACE}о
        {NON_BREAKING_SPACE}программе
      </NavLink>
    </p>
    <EmergingFormElement controlType="switch" name="corporate">
      <Input name="companyName" label="Название компании-работадателя" />
      <TextArea
        name="companyPosition"
        label={
          <p className={styles.label}>
            Ваша должность и департамент компании.{SPACE}
            <span className={styles.sectondaryText}>
              Если у вас есть кодовое слово от работадателя, также укажите его
              здесь.
            </span>
          </p>
        }
      />
    </EmergingFormElement>
  </article>
)

export default Main
