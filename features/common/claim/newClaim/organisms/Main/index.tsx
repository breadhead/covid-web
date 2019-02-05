import { themes } from '@app/features/client'
import { Select } from '@app/features/common/form'
import { StylesType } from '@app/lib/config'
import ClaimTarget from '@app/models/Claim/ClaimTarget'
import { mapString } from '@app/ui/atoms/Select'
import cx from 'classnames'
import * as React from 'react'
import { ShortClaimFields } from '../ClaimForm'
import { schema } from './schema'

interface Props {
  styles: StylesType
  initial: Partial<ShortClaimFields>
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

    {/* TODO: Hide by ON-357, DO NOT delete */}
    {/* <p className={styles.emergingLabel}>
      Вы консультируетесь по корпоративной программе от своего работодателя?
      {SPACE}
      <NavLink href="/partners" target={TargetType.Blank}>
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
    </EmergingFormElement> */}
  </article>
)

export default Main
