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
import ClaimTarget from '@app/models/Claim/ClaimTarget'
import NavLink from '@app/ui/atoms/NavLink'
import { mapEnum, mapString } from '@app/ui/atoms/Select'

import { localizations, themes } from '../../../../values'
import * as styles from './../ClaimForm/ClaimForm.css'

const Main = () => (
  <article className={styles.article}>
    <h2 className={styles.title}>Кратко о теме консультации</h2>
    <p className={styles.label}>Для кого эта консультация</p>
    <Select
      name="target"
      options={Object.entries(ClaimTarget).map(mapEnum)}
      placeholder="Выберите консультируемого"
    />
    <p className={styles.label}>Тема вашего вопроса</p>
    <Select
      name="theme"
      options={themes.map(mapString)}
      placeholder="Выберите тему"
    />
    <p className={styles.label}>
      У вас есть установленный врачом онкологический диагноз?
    </p>
    <EmergingFormElement controlType="radiogroup" name="diagnosis">
      <p className={cx(styles.label, styles.emergingLabel)}>Локализация</p>
      <ComboBox
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
    <EmergingFormElement controlType="switch" name="corporate">
      <p className={cx(styles.label, styles.emergingLabel)}>
        Название компании-работодателя
      </p>
      <Input name="companyName" />
      <p className={cx(styles.label, styles.emergingLabel)}>
        Ваша должность и департамент компании.{SPACE}
        <span className={styles.sectondaryText}>
          Если у вас есть кодовое слово от работадателя, также укажите его
          здесь.
        </span>
      </p>
      <TextArea name="companyPosition" />
    </EmergingFormElement>
  </article>
)

export default Main
