import cx from 'classnames'
import * as React from 'react'
import { DeepPartial } from 'utility-types'

import { themes } from '@app/features/client/values'
import {
  EmergingControlTypes,
  EmergingFormElement,
  Input,
  Select,
  TextArea,
} from '@app/features/common/form'
import { SPACE, StylesType } from '@app/lib/config'
import ClaimTarget from '@app/models/Claim/ClaimTarget'
import { mapString } from '@app/ui/Select'

import { ShortClaimFields } from '../ClaimForm'
import { schema } from './schema'

interface Props {
  styles: StylesType
  initial: DeepPartial<ShortClaimFields>
}

const Main = ({ styles }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>Кратко о теме консультации</h2>
    <label htmlFor="theme" className={styles.label}>
      Тема вашего вопроса
    </label>
    <Select
      validate={schema.theme}
      name="theme"
      options={themes.map(mapString)}
      placeholder="Выберите тему"
    />
    <label htmlFor="target" className={cx(styles.label, styles.field)}>
      Для кого эта консультация
    </label>
    <Select
      validate={schema.target}
      name="target"
      options={Object.values(ClaimTarget).map(mapString)}
      placeholder="Выберите для кого консультация"
    />

    <p className={cx(styles.label, styles.field)}>
      Вы консультируетесь по корпоративной программе от своего работодателя?
    </p>
    <EmergingFormElement
      validate={schema.companyPresence}
      controlType={EmergingControlTypes.Switch}
      name="companyPresence"
    >
      <label
        htmlFor="company.name"
        className={cx(styles.label, styles.emergingLabel)}
      >
        Название компании-работодателя
      </label>
      <Input validate={schema.companyName} name="company.name" />
      <label
        htmlFor="company.position"
        className={cx(styles.label, styles.emergingLabel, styles.field)}
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
