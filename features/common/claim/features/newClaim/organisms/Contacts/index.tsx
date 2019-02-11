import { Input, InputType } from '@app/features/common/form'
import { NON_BREAKING_SPACE, StylesType } from '@app/lib/config'
import cx from 'classnames'
import * as React from 'react'
import { ShortClaimFields } from '../ClaimForm'
import { schema } from './schema'

interface Props {
  styles: StylesType
  initial: Partial<ShortClaimFields>
}
const Contacts = ({ styles }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>Контактные данные</h2>
    <label htmlFor="personalData.name" className={styles.label}>
      Как к вам обращаться?
      <span className={styles.secondaryText}>
        {' '}
        Вы можете не указывать свою фамилию, если не хотите
      </span>
    </label>
    <Input validate={schema.name} name="personalData.name" />

    <label
      htmlFor="personalData.email"
      className={cx(styles.label, styles.field)}
    >
      Электронная почта.
      <span className={styles.secondaryText}>
        {' '}
        Будем присылать вам уведомления{NON_BREAKING_SPACE}о ходе консультации.
        Пожалуйста, регулярно проверяйте почту до{NON_BREAKING_SPACE}окончания
        консультации
      </span>
    </label>
    <Input
      validate={schema.email}
      name="personalData.email"
      type={InputType.Email}
      placeholder="konstantinopolsky@gmail.com"
    />
    <label
      htmlFor="personalData.phone"
      className={cx(styles.label, styles.emergingLabel, styles.field)}
    >
      Контактный телефон.
      <span className={styles.secondaryText}>
        {' '}
        Не{NON_BREAKING_SPACE}будем звонить лишний раз, только по
        {NON_BREAKING_SPACE}важным вопросам в{NON_BREAKING_SPACE}ходе
        консультации
      </span>
    </label>
    <Input
      validate={schema.phone}
      name="personalData.phone"
      type={InputType.Phone}
    />
  </article>
)

export default Contacts
