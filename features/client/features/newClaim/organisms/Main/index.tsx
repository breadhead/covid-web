import {
  ComboBox,
  EmergingControlTypes,
  EmergingFormElement,
  Input,
  Select,
  TextArea,
} from '@app/features/common/form'
import { NON_BREAKING_SPACE, SPACE, StylesType } from '@app/lib/config'
import ClaimTarget from '@app/models/Claim/ClaimTarget'
import NavLink from '@app/ui/atoms/NavLink'
import { mapEnum, mapString } from '@app/ui/atoms/Select'
import { RadioButtonsValue } from '@app/ui/organisms/EmergingFormElement/RadioGroupElement'
import cx from 'classnames'
import * as React from 'react'
import { localizations, themes } from '../../../../values'
import { ShortClaimFields } from '../ClaimForm'
import { schema } from './schema'

interface Props {
  styles: StylesType
  initial: Partial<ShortClaimFields>
}

const Main = ({ styles, initial }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>Кратко о теме консультации</h2>
    <label htmlFor="target" className={styles.label}>
      Для кого эта консультация
    </label>
    <Select
      className={styles.field}
      validate={schema.target}
      name="target"
      options={Object.entries(ClaimTarget).map(mapEnum)}
      placeholder="Выберите для кого консультация"
    />
    <label htmlFor="theme" className={styles.label}>
      Тема вашего вопроса
    </label>
    <Select
      className={styles.field}
      validate={schema.theme}
      name="theme"
      options={themes.map(mapString)}
      placeholder="Выберите тему"
    />
    <label htmlFor="diagnosis" className={styles.label}>
      У вас есть установленный врачом онкологический диагноз?
    </label>
    <EmergingFormElement
      className={styles.field}
      validate={schema.localizationPresence}
      controlType={EmergingControlTypes.Radiogroup}
      name="localizationPresence"
      defaultVisible={initial.localizationPresence}
    >
      <label
        htmlFor="localization"
        className={cx(styles.label, styles.emergingLabel)}
      >
        Локализация
      </label>
      <ComboBox
        validate={schema.localization}
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
      validate={schema.companyPresence}
      controlType={EmergingControlTypes.Switch}
      defaultVisible={initial.companyPresence}
      name="companyPresence"
    >
      <label
        htmlFor="company.name"
        className={cx(styles.label, styles.emergingLabel)}
      >
        Название компании-работодателя
      </label>
      <Input
        className={styles.field}
        validate={schema.companyName}
        name="company.name"
      />
      <label
        htmlFor="company.position"
        className={cx(styles.label, styles.emergingLabel)}
      >
        Ваша должность и департамент компании.{SPACE}
        <span className={styles.secondaryText}>
          Если у вас есть кодовое слово от работодателя, также укажите его
          здесь.
        </span>
      </label>
      <TextArea validate={schema.companyPosition} name="company.position" />
    </EmergingFormElement>
  </article>
)

export default Main
