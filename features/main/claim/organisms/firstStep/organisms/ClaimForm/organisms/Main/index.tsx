import cx from 'classnames'
import * as React from 'react'
import * as styles from '../../ClaimForm.css'

import NavLink from '@app/ui/atoms/NavLink'
import Select from '@app/ui/molecules/Select'

import Input from '@app/features/common/form/components/Input'
import { NON_BREAKING_SPACE, SPACE } from '@app/lib/config'
// import Combobox from '@app/ui/molecules/Combobox'
import TextArea from '@app/ui/atoms/TextArea'
import EmergingFormElement from '@app/ui/organisms/EmergingFormElement'

const mockSelectOptions = [
  {
    key: '1',
    label: 'first',
  },
  {
    key: '2',
    label: 'second',
  },
]

const Main = () => (
  <article className={styles.article}>
    <h2 className={styles.title}>Кратко о теме консультации</h2>
    <p className={styles.label}>Для кого эта консультация</p>
    <Select
      options={mockSelectOptions}
      name="choose_user"
      // defaultValue="Выберите консультируемого"
    />
    <p className={styles.label}>Тема вашего вопроса</p>
    <Select
      options={mockSelectOptions}
      name="choose_theme"
      // defaultValue="Выберите тему"
    />
    <p className={styles.label}>
      У вас есть установленный врачом онкологический диагноз?
    </p>
    <EmergingFormElement controlType="radiogroup" name="diagnosis">
      <p className={cx(styles.label, styles.emergingLabel)}>Локализация</p>
      {/* <Combobox
        name="cancer_localization"
        options={mockSelectOptions}
        // defaultValue="Выберите тему"
      /> */}
    </EmergingFormElement>
    <p className={styles.emergingLabel}>
      Вы консультируетесь по корпоративной программе от своего работодателя?
      {SPACE}
      <NavLink href="#">
        Узнать{NON_BREAKING_SPACE}больше{NON_BREAKING_SPACE}о
        {NON_BREAKING_SPACE}программе
      </NavLink>
    </p>
    <EmergingFormElement controlType="switch" name="consulting">
      <Input
        name="company-employer_name"
        label="Название компании-работадателя"
      />
      <TextArea
        name="position_and_department"
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
