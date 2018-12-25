import cx from 'classnames'
import * as React from 'react'

import {
  ComboBox,
  EmergingFormElement,
  Input,
  Select,
  TextArea,
} from '@app/features/common/form'
import { NON_BREAKING_SPACE, SPACE, StylesType } from '@app/lib/config'
import ClaimTarget from '@app/models/Claim/ClaimTarget'
import NavLink from '@app/ui/atoms/NavLink'
import { mapEnum, mapString } from '@app/ui/atoms/Select'

import { Validator } from '@app/features/common/formHOCs/withFinalForm/helpers/validator'
import { RadioButtonsValue } from '@app/ui/organisms/EmergingFormElement/RadioGroupElement'
import { localizations, themes } from '../../../../values'
import { schema } from './schema'

interface Props {
  styles: StylesType
  validator: Validator
}

const Main = ({ styles, validator }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>Кратко о теме консультации</h2>
    <label htmlFor="target" className={styles.label}>
      Для кого эта консультация
    </label>
    <Select
      className={styles.field}
      validate={(value: string) => validator(value, schema.target)}
      name="target"
      options={Object.entries(ClaimTarget).map(mapEnum)}
      placeholder="Выберите консультируемого"
    />
    <label htmlFor="theme" className={styles.label}>
      Тема вашего вопроса
    </label>
    <Select
      className={styles.field}
      validate={(value: string) => validator(value, schema.theme)}
      name="theme"
      options={themes.map(mapString)}
      placeholder="Выберите тему"
    />
    <label htmlFor="diagnosis" className={styles.label}>
      У вас есть установленный врачом онкологический диагноз?
    </label>
    <EmergingFormElement
      className={styles.field}
      validate={(value: string) => validator(value, schema.diagnosis)}
      controlType="radiogroup"
      name="diagnosis"
    >
      <label
        htmlFor="localization"
        className={cx(styles.label, styles.emergingLabel)}
      >
        Локализация
      </label>
      <ComboBox
        validate={(value: string) => validator(value, schema.localization)}
        name="localization"
        options={localizations.map(mapString)}
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
    <EmergingFormElement
      defaultValue={RadioButtonsValue.No}
      validate={(value: string) => validator(value, schema.corporate)}
      controlType="switch"
      name="corporate"
    >
      <label
        htmlFor="companyName"
        className={cx(styles.label, styles.emergingLabel)}
      >
        Название компании-работодателя
      </label>
      <Input
        className={styles.field}
        validate={(value: string) => validator(value, schema.companyName)}
        name="companyName"
      />
      <label
        htmlFor="companyPosition"
        className={cx(styles.label, styles.emergingLabel)}
      >
        Ваша должность и департамент компании.{SPACE}
        <span className={styles.secondaryText}>
          Если у вас есть кодовое слово от работодателя, также укажите его
          здесь.
        </span>
      </label>
      <TextArea
        validate={(value: string) => validator(value, schema.companyPosition)}
        name="companyPosition"
      />
    </EmergingFormElement>
  </article>
)

export default Main
