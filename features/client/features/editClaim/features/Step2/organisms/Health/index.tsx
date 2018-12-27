import * as React from 'react'

import { TextArea } from '@app/features/common/form'

import { SPACE, StylesType } from '@app/lib/config'
import { InputType } from '@app/ui/atoms/Input'
import RadioButton from '@app/ui/atoms/RadioButton'
import { feelings } from './config'
import { schema } from './schema'
interface Props {
  styles: StylesType
}

const Health = ({ styles }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>Общее самочувствие</h2>
    {feelings.map(feeling => (
      <RadioButton
        className={styles.field}
        name="feeling"
        value={feeling}
        key={feeling}
      >
        {feeling}
      </RadioButton>
    ))}

    <label htmlFor="worst" className={styles.label}>
      Что беспокоит больше всего?
      <span className={styles.secondaryText}>{SPACE}Если такое имеется</span>
    </label>
    <TextArea name="worst" id="worst" />

    <label htmlFor="complaint" className={styles.label}>
      Жалобы.
      <span className={styles.secondaryText}>
        {SPACE}Если есть боли, недомогания, то какие? Когда начались, как долго
        длятся, с чем они по-вашему связаны?
        <br />
        Возникали ли эти жалобы ранее?
      </span>
    </label>
    <TextArea name="complaint" id="complaint" />
    <label htmlFor="nowTreatment" className={styles.label}>
      Проводится ли противоопухолевое лечение в данный момент? Какое?
      <span className={styles.secondaryText}>
        {SPACE}Опишите своими словами, если есть
      </span>
    </label>

    <TextArea name="nowTreatment" id="nowTreatment" />
  </article>
)

export default Health
